import { useEffect, useState } from "react";
import "../../css/Story.css";

function Story() {
  const [story, setStory] = useState({
    id: 1,
    title: "Sample Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
    private: false,
    created_at: "2024-06-24T12:00:00Z",
    votes_count: 10,
    user: {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      first_name: "John",
      last_name: "Doe",
      status: "Active",
      profile_pic:
        "https://c8.alamy.com/comp/AKP3HX/sad-mature-indian-man-AKP3HX.jpg",
      created_at: "2023-01-15T08:30:00Z",
      last_login: "2024-06-24T10:15:00Z",
      is_active: true,
      is_admin: false,
    },
    story_fragments: [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
        created_at: "2024-06-24T12:15:00Z",
        user: {
          id: 4,
          username: "emily_jones",
          email: "emily.jones@example.com",
          first_name: "Emily",
          last_name: "Jones",
          status: "Active",
          profile_pic:
            "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
          created_at: "2023-04-10T10:00:00Z",
          last_login: "2024-06-24T11:45:00Z",
          is_active: true,
          is_admin: false,
        },
        fragment_comments: [],
      },
      {
        id: 2,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
        created_at: "2024-06-24T12:05:00Z",
        user: {
          id: 2,
          username: "jane_smith",
          email: "jane.smith@example.com",
          first_name: "Jane",
          last_name: "Smith",
          status: "Active",
          profile_pic:
            "https://as1.ftcdn.net/v2/jpg/00/65/11/80/500_F_65118027_7hYshdPKHSDLQo0ZTqjjNRDojhGXyJiv.jpg",
          created_at: "2023-02-20T09:45:00Z",
          last_login: "2024-06-24T11:00:00Z",
          is_active: true,
          is_admin: false,
        },
        fragment_comments: [
          {
            id: 1,
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
            created_at: "2024-06-22T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
          {
            id: 1,
            content: "Comment X",
            created_at: "2024-06-22T12:10:00Z",
            user: {
              id: 3,
              username: "gilbet_man",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12765264-stock-photo-smiling-business-man.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
        ],
      },
      {
        id: 3,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
        created_at: "2024-06-26T12:05:00Z",
        user: {
          id: 2,
          username: "jane_smith",
          email: "jane.smith@example.com",
          first_name: "Jane",
          last_name: "Smith",
          status: "Active",
          profile_pic:
            "https://as2.ftcdn.net/v2/jpg/00/58/78/25/1000_F_58782554_iuhH6kivjt3WdoVXkPeRqhLzEvqWQmny.jpg",
          created_at: "2023-02-20T09:45:00Z",
          last_login: "2024-06-24T11:00:00Z",
          is_active: true,
          is_admin: false,
        },
        fragment_comments: [
          {
            id: 1,
            content: "Comment 2",
            created_at: "2024-06-24T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
        ],
      },
      {
        id: 4,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
        created_at: "2024-06-24T12:05:00Z",
        user: {
          id: 2,
          username: "jane_smith",
          email: "jane.smith@example.com",
          first_name: "Jane",
          last_name: "Smith",
          status: "Active",
          profile_pic:
            "https://mh-1-cdn.panthermedia.net/media/previews/0015000000/15123000/~mature-indian-man_15123283_high.jpg",
          created_at: "2023-02-20T09:45:00Z",
          last_login: "2024-06-24T11:00:00Z",
          is_active: true,
          is_admin: false,
        },
        fragment_comments: [
          {
            id: 1,
            content: "Comment 3",
            created_at: "2024-06-24T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
        ],
      },
      {
        id: 5,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Adipiscing elit ut aliquam purus sit. A lacus vestibulum sed arcu non odio euismod lacinia at. Dictum fusce ut placerat orci nulla pellentesque. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sapien eget mi proin sed libero enim sed faucibus turpis. Auctor eu augue ut lectus arcu bibendum. Phasellus faucibus scelerisque eleifend donec. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar.",
        created_at: "2024-06-24T12:05:00Z",
        user: {
          id: 2,
          username: "jane_smith",
          email: "jane.smith@example.com",
          first_name: "Jane",
          last_name: "Smith",
          status: "Active",
          profile_pic:
            "https://c8.alamy.com/comp/AKP3DT/shocked-mature-indian-man-hands-on-head-AKP3DT.jpg",
          created_at: "2023-02-20T09:45:00Z",
          last_login: "2024-06-24T11:00:00Z",
          is_active: true,
          is_admin: false,
        },
        fragment_comments: [
          {
            id: 1,
            content: "Comment 4",
            created_at: "2024-06-24T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
          {
            id: 2,
            content: "Comment 5",
            created_at: "2024-06-24T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
          {
            id: 3,
            content: "Comment 6",
            created_at: "2024-06-24T12:10:00Z",
            user: {
              id: 3,
              username: "mark_wilson",
              email: "mark.wilson@example.com",
              first_name: "Mark",
              last_name: "Wilson",
              status: "Active",
              profile_pic:
                "https://thumbs.dreamstime.com/b/happy-man-okay-sign-portrait-white-background-showing-31416492.jpg",
              created_at: "2023-03-05T11:00:00Z",
              last_login: "2024-06-24T11:30:00Z",
              is_active: true,
              is_admin: false,
            },
          },
        ],
      },
    ],
    story_votes_count: [
      {
        id: 1,
        created_at: "2024-06-24T12:20:00Z",
        user: {
          id: 5,
          username: "sam_roberts",
          email: "sam.roberts@example.com",
          first_name: "Sam",
          last_name: "Roberts",
          status: "Active",
          profile_pic:
            "https://as1.ftcdn.net/v2/jpg/02/20/80/30/1000_F_220803033_x6Oci7G6zKKfjqgsl9gBn3dpOyLdZmTN.jpg",
          created_at: "2023-05-15T08:00:00Z",
          last_login: "2024-06-24T12:00:00Z",
          is_active: true,
          is_admin: false,
        },
      },
      {
        id: 2,
        created_at: "2024-06-24T12:25:00Z",
        user: {
          id: 6,
          username: "olivia_adams",
          email: "olivia.adams@example.com",
          first_name: "Olivia",
          last_name: "Adams",
          status: "Active",
          profile_pic:
            "https://as1.ftcdn.net/v2/jpg/02/20/80/30/1000_F_220803033_x6Oci7G6zKKfjqgsl9gBn3dpOyLdZmTN.jpg",
          created_at: "2023-06-20T07:30:00Z",
          last_login: "2024-06-24T12:15:00Z",
          is_active: true,
          is_admin: false,
        },
      },
    ],
  });

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

  return (
    <div className="story-main">
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
            <div className="story-upper-top-left">
              <p>Users who collaborated on this story:</p>
              <div className="user-profile-pics">
                {story.story_fragments.slice(0, 3).map((fragment, index) => (
                  <div key={index} className="story-profile-pic-container">
                    <img
                      src={fragment.user.profile_pic}
                      alt="Profile Pic"
                      id="story-profile-pic"
                    />
                  </div>
                ))}
                {story.story_fragments.length > 3 && (
                  <div className="story-plus-users">
                    <p>+{story.story_fragments.length - 3} users</p>
                  </div>
                )}
              </div>
            </div>
            <p className="story-created-text">
              Created {formatDate(story.created_at)}
            </p>
            <div className="story-upper-bottom-left">
              <p>{story.description}</p>
            </div>
          </div>
          <div className="story-upper-right">
            <div className="story-upper-right-inner">
              {story.story_fragments.map((fragment, index) => (
                <div className="story-fragment-container" key={index}>
                  <p className="story-username">{fragment.user.username}</p>
                  <p>{fragment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="story-comment-main">
        {story.story_fragments.map((fragment, index) => (
          <div key={index}>
            {fragment.fragment_comments.map((comment, commentIndex) => (
              <div key={commentIndex} className="indiv-comment-container">
                <div className="story-comment-inner">
                  <div className="story-comment-profile-pic-container">
                    <img
                      src={comment.user.profile_pic}
                      id="story-comment-profile-pic"
                    />
                  </div>
                  <p>
                    {comment.user.username} ({formatDate(comment.created_at)})
                  </p>
                </div>
                <div className="story-comment-content">
                  <p className="comment-content">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
