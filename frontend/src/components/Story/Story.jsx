import { useEffect, useState } from "react";
import "../../css/Story.css"; // Ensure correct path to your CSS file
import Cookies from "js-cookie";

function Story() {
  const [story, setStory] = useState({});
  const [users, setUsers] = useState([]);
  const [storyLoading, setStoryLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [hoveredUser, setHoveredUser] = useState(null);

  useEffect(() => {
    const storyID = Cookies.get("storyID");
    if (storyID) {
      fetch(`http://127.0.0.1:8000/api/story/${storyID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch story");
          }
        })
        .then((data) => {
          console.log("Data from API:", data);
          setStory(data.story);
          setStoryLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching story:", error);
          alert("Failed to fetch story");
        });
    }
  }, []);

  useEffect(() => {
    if (!storyLoading && Object.keys(story).length > 0) {
      const uniqueUsernames = new Set();
      const uniqueUsers = new Set();

      story.fragments.forEach((fragment) => {
        const username = fragment.user.username;
        if (!uniqueUsernames.has(username)) {
          uniqueUsernames.add(username);
          uniqueUsers.add(fragment.user);
        }
      });

      const uniqueUsersArray = Array.from(uniqueUsers);
      setUsers(uniqueUsersArray);
      setUsersLoading(false);
    }
  }, [story, storyLoading]);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    return [
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd,
      date.getFullYear(),
    ].join("/");
  };

  const handleMouseEnter = (user) => {
    console.log('e')
    setHoveredUser(user);
  };

  const handleMouseLeave = () => {
    console.log("l");
    setHoveredUser(null);
  };

  return (
    <div className="story-main">
      {storyLoading || usersLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="story-upper">
            <div className="story-title-container">
              <div className="story-title-inner">
                <p className="story-title">{story.title}</p>
                <div className="vote-container">
                  <div className="vote-upper">+</div>
                  <div className="vote-mid">{story.votes_count}</div>
                  <div className="vote-lower">-</div>
                </div>
              </div>
              <div className="story-divider"></div>
            </div>
            <div className="story-upper-inner">
              <div className="story-upper-left">
                <p className="story-created-text">
                  Created {formatDate(story.created_at)}
                </p>
                <div className="story-upper-top-left">
                  <p>Users who collaborated on this story:</p>
                  <div className="user-profile-pics">
                    {users.slice(0, 3).map((user) => (
                      <div
                        key={user.id}
                        className="story-profile-pic-container"
                        onMouseEnter={() => handleMouseEnter(user)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={user.profile_pic}
                          alt="Profile Pic"
                          id="story-profile-pic"
                          className="story-profile-pic"
                        />
                        {hoveredUser === user && (
                          <div className="profile-card">
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            {/* Add other details you want to display */}
                          </div>
                        )}
                      </div>
                    ))}

                    {users.length > 3 && (
                      <div className="story-plus-users">
                        <p>+{users.length - 3} users</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="story-upper-bottom-left">
                  <p>{story.description}</p>
                </div>
              </div>
              <div className="story-upper-right">
                <div className="story-upper-right-inner">
                  {story.fragments.map((fragment, index) => (
                    <div className="story-fragment-container" key={index}>
                      <p className="story-username">{fragment.user.username}</p>
                      <p>{fragment.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Story;
