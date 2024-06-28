import { useState, useEffect } from "react";
import "../../css/Profile.css";
import Cookies from "js-cookie";

function Profile() {
  const [routeUser, setRouteUser] = useState(Cookies.get("routeUser"));
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [rank, setRank] = useState(0);
  const [threeStories, setThreeStories] = useState([
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      private: false,
      votes_count: 10,
      fragments: [
        {
          id: 1,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis lectus. Fusce id velit ut tortor pretium viverra. Eget nulla facilisi etiam dignissim diam quis. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Vestibulum rhoncus est pellentesque elit ullamcorper. Tellus molestie nunc non blandit massa enim nec. Eget velit aliquet sagittis id. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nec ullamcorper sit amet risus nullam eget felis. Aliquam ut porttitor leo a. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nibh mauris cursus mattis molestie a. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pulvinar neque laoreet suspendisse interdum consectetur. Sollicitudin tempor id eu nisl nunc mi ipsum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Eget felis eget nunc lobortis mattis aliquam. Tincidunt dui ut ornare lectus sit. Sit amet purus gravida quis blandit turpis cursus in hac. Sit amet consectetur adipiscing elit pellentesque habitant. Id ornare arcu odio ut sem nulla. Arcu felis bibendum ut tristique et egestas. Duis convallis convallis tellus id interdum velit laoreet id. Enim nulla aliquet porttitor lacus luctus accumsan. Enim diam vulputate ut pharetra. Dolor morbi non arcu risus quis varius. A lacus vestibulum sed arcu non.",
        },
        {
          id: 2,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis lectus. Fusce id velit ut tortor pretium viverra. Eget nulla facilisi etiam dignissim diam quis. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Vestibulum rhoncus est pellentesque elit ullamcorper. Tellus molestie nunc non blandit massa enim nec. Eget velit aliquet sagittis id. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nec ullamcorper sit amet risus nullam eget felis. Aliquam ut porttitor leo a. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nibh mauris cursus mattis molestie a. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pulvinar neque laoreet suspendisse interdum consectetur. Sollicitudin tempor id eu nisl nunc mi ipsum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Eget felis eget nunc lobortis mattis aliquam. Tincidunt dui ut ornare lectus sit. Sit amet purus gravida quis blandit turpis cursus in hac. Sit amet consectetur adipiscing elit pellentesque habitant. Id ornare arcu odio ut sem nulla. Arcu felis bibendum ut tristique et egestas. Duis convallis convallis tellus id interdum velit laoreet id. Enim nulla aliquet porttitor lacus luctus accumsan. Enim diam vulputate ut pharetra. Dolor morbi non arcu risus quis varius. A lacus vestibulum sed arcu non.",
        },
      ],
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      fragments: [
        {
          id: 1,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id ornare. Lorem ipsum dolor sit amet. Cras ornare arcu dui vivamus arcu felis bibendum ut. Ullamcorper dignissim cras tincidunt lobortis. Tellus at urna condimentum mattis. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Fringilla phasellus faucibus scelerisque eleifend. Pharetra diam sit amet nisl suscipit adipiscing. Nibh cras pulvinar mattis nunc sed blandit libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Dignissim suspendisse in est ante. Morbi tristique senectus et netus et. Egestas integer eget aliquet nibh. Morbi tincidunt augue interdum velit euismod. Mauris a diam maecenas sed enim ut sem. Mattis nunc sed blandit libero. Vel pharetra vel turpis nunc eget lorem dolor sed.",
        },
        {
          id: 2,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id ornare. Lorem ipsum dolor sit amet. Cras ornare arcu dui vivamus arcu felis bibendum ut. Ullamcorper dignissim cras tincidunt lobortis. Tellus at urna condimentum mattis. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Fringilla phasellus faucibus scelerisque eleifend. Pharetra diam sit amet nisl suscipit adipiscing. Nibh cras pulvinar mattis nunc sed blandit libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Dignissim suspendisse in est ante. Morbi tristique senectus et netus et. Egestas integer eget aliquet nibh. Morbi tincidunt augue interdum velit euismod. Mauris a diam maecenas sed enim ut sem. Mattis nunc sed blandit libero. Vel pharetra vel turpis nunc eget lorem dolor sed.",
        },
      ],
      private: false,
      votes_count: 12,
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      fragments: [
        {
          id: 1,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id ornare. Lorem ipsum dolor sit amet. Cras ornare arcu dui vivamus arcu felis bibendum ut. Ullamcorper dignissim cras tincidunt lobortis. Tellus at urna condimentum mattis. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Fringilla phasellus faucibus scelerisque eleifend. Pharetra diam sit amet nisl suscipit adipiscing. Nibh cras pulvinar mattis nunc sed blandit libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Dignissim suspendisse in est ante. Morbi tristique senectus et netus et. Egestas integer eget aliquet nibh. Morbi tincidunt augue interdum velit euismod. Mauris a diam maecenas sed enim ut sem. Mattis nunc sed blandit libero. Vel pharetra vel turpis nunc eget lorem dolor sed.",
        },
        {
          id: 2,
          user: {
            username: "adamjtroup",
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id ornare. Lorem ipsum dolor sit amet. Cras ornare arcu dui vivamus arcu felis bibendum ut. Ullamcorper dignissim cras tincidunt lobortis. Tellus at urna condimentum mattis. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Fringilla phasellus faucibus scelerisque eleifend. Pharetra diam sit amet nisl suscipit adipiscing. Nibh cras pulvinar mattis nunc sed blandit libero. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Dignissim suspendisse in est ante. Morbi tristique senectus et netus et. Egestas integer eget aliquet nibh. Morbi tincidunt augue interdum velit euismod. Mauris a diam maecenas sed enim ut sem. Mattis nunc sed blandit libero. Vel pharetra vel turpis nunc eget lorem dolor sed.",
        },
      ],
      private: false,
      votes_count: 25,
    },
  ]);

  useEffect(() => {
    if (routeUser) {
      fetch(`http://127.0.0.1:8000/api/user/${routeUser}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          response.json().then((data) => {
            console.log("Data from API:", data);
            if (response.status === 200) {
              setUser(data.user);
              setRank(data.rank);
              setLoading(false);
            } else {
              alert(data.error);
            }
          });
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, [routeUser]);

  return (
    <div className="profile-main">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="profile-left">
            <div className="profile-pic-container">
              <img
                src={user.profile_pic}
                id="profile-profile-pic"
                alt="Profile"
              />
            </div>
            <p className="profile-username">{user.username}</p>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>#{rank} user in the world!</p>
          </div>
          <div className="profile-right">
            <div className="three-stories-container">
              {threeStories.map((story) => (
                <div className="indiv-story-container" key={story.id}>
                  <div className="notepad-img-container">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/013/165/896/original/blank-notebook-paper-sheet-with-lines-illustration-png.png"
                      id="notepad-img"
                      alt="Story Notepad"
                    />
                    <div className="overlay">
                      <h3>{story.title}</h3>
                      <div className="notepad-text">
                        {story.fragments.map((fragment) => (
                          <div key={fragment.id}>
                            <p >{fragment.user.username}</p>
                            <p className="profile-three-fragment">{fragment.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
