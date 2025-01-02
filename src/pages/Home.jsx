import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupCard from "../components/GroupCard";

const HomePage = () => {
  const userName = "John Doe"; // For now, using a hardcoded name
  const [isModalVisible, setModalVisible] = useState(false);
  const recentActivities = [
    "Joined the Math Study Group",
    "Commented on a Physics Discussion",
    "Requested mentorship from Dr. Smith",
  ];

  const upcomingTasks = [
    "Complete Physics Assignment (Due: Jan 5th)",
    "Meeting with Mentor (Jan 6th, 10:00 AM)",
  ];

  const groups = [
    { image: "path/to/image1.jpg", title: "Math Study Group" },
    { image: "path/to/image2.jpg", title: "Physics Study Group" },
    { image: "path/to/image3.jpg", title: "Chemistry Study Group" },
  ];

  const handleJoinGroup = (groupTitle) => {
    alert(`Joined ${groupTitle}`);
  };

  return (
    <div className="bg-gray-50 h-full">
      <Header />

      {/* Welcome Message */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-semibold">Welcome back, {userName}!</h2>
        <p className="text-gray-500 mt-2">Here’s what’s happening today</p>
      </div>

      {/* Main Dashboard */}
      <div className="mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="list-disc pl-5">
              {recentActivities.map((activity, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Tasks</h3>
            <ul className="list-disc pl-5">
              {upcomingTasks.map((task, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discussion Forum Highlights */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Active Discussion Forums
          </h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-2">
              Latest in Physics: "What is the theory of relativity?"
            </li>
            <li className="text-gray-700 mb-2">
              Chemistry: "Understanding Organic Compounds"
            </li>
          </ul>
        </div>

        {/* Group Study Invitations */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Groups</h3>
          <div className="flex space-x-4 py-4 overflow-x-auto">
            {groups.map((group, index) => (
              <GroupCard
                key={index}
                image={group.image}
                title={group.title}
                onJoin={() => handleJoinGroup(group.title)}
              />
            ))}
          </div>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setModalVisible(true)} // Show modal when clicked
          >
            Create New Group
          </button>
          {/* Modal for Creating a Group */}
          {isModalVisible && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-1/3">
                <h2 className="text-2xl font-semibold mb-4">
                  Create New Group
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="groupImage"
                    >
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      id="groupImage"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="groupName"
                    >
                      Group Name
                    </label>
                    <input
                      type="text"
                      id="groupName"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => setModalVisible(false)} // Hide modal when clicked
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Mentorship Match */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Mentorship Match</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-2">
              Dr. Smith (Physics) - Available for mentorship
            </li>
            <li className="text-gray-700 mb-2">
              Prof. Johnson (Math) - Available for mentorship
            </li>
          </ul>
        </div>

        {/* Gamification - Badges */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Achievements</h3>
          <div className="flex space-x-4">
            <div className="bg-blue-200 px-4 py-2 rounded">Top Contributor</div>
            <div className="bg-green-200 px-4 py-2 rounded">Active Student</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
