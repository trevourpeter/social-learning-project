import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SocialLearningAndNetworkingSystem() {

  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]); // For storing the student's courses
  const [groups, setGroups] = useState([]); // For social groups
  const [notifications, setNotifications] = useState([]); // For notifications
  const [chatRooms, setChatRooms] = useState([]); // For chat rooms

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          // Fetch user details
          const response = await axios.get("http://127.0.0.1:8000/api/user/", config);
          setLoggedIn(true);
          setUsername(response.data.username);

          // Fetch student's courses
          const coursesResponse = await axios.get("http://127.0.0.1:8000/api/courses/", config);
          setCourses(coursesResponse.data);

          // Fetch user's groups
          const groupsResponse = await axios.get("http://127.0.0.1:8000/api/groups/", config);
          setGroups(groupsResponse.data);

          // Fetch notifications
          const notificationsResponse = await axios.get("http://127.0.0.1:8000/api/notifications/", config);
          setNotifications(notificationsResponse.data);

          // Fetch chat rooms
          const chatRoomsResponse = await axios.get("http://127.0.0.1:8000/api/chatrooms/", config);
          setChatRooms(chatRoomsResponse.data);

        } else {
          setLoggedIn(false);
          setUsername("");
        }
      } catch (error) {
        setLoggedIn(false);
        setUsername("");
        console.error("Error fetching user data:", error.response?.data || error.message);
      }
    };
    checkLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        await axios.post("http://127.0.0.1:8000/api/logout/", { refresh: refreshToken }, config);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setLoggedIn(false);
        setUsername("");
        setCourses([]);
        setGroups([]);
        setNotifications([]);
        setChatRooms([]);
        console.log("Log out successful!");
      }
    } catch (error) {
      console.error("Failed to logout", error.response?.data || error.message);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username}!</h2>
          <h3>Your Courses:</h3>
          <ul>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <li key={index}>{course.name} - Progress: {course.progress}%</li>
              ))
            ) : (
              <p>No courses enrolled yet.</p>
            )}
          </ul>

          <h3>Your Groups:</h3>
          <ul>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <li key={index}>{group.name} - Members: {group.memberCount}</li>
              ))
            ) : (
              <p>No groups joined yet.</p>
            )}
          </ul>

          <h3>Notifications:</h3>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li key={index}>{notification.message}</li>
              ))
            ) : (
              <p>No notifications available.</p>
            )}
          </ul>

          <h3>Chat Rooms:</h3>
          <ul>
            {chatRooms.length > 0 ? (
              chatRooms.map((chat, index) => (
                <li key={index}>{chat.roomName}</li>
              ))
            ) : (
              <p>No active chat rooms available.</p>
            )}
          </ul>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Please Login to Access Your Social Learning Dashboard</h2>
      )}
    </div>
  );
}
