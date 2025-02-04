import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GroupCard from "../components/GroupCard";

const HomePage = () => {
  const userName = "John Doe"; // TODO: Replace with dynamic user data
  const [isModalVisible, setModalVisible] = useState(false);
  const groupNameRef = useRef(null);
  const fileInputRef = useRef(null);

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

  const handleCreateGroup = (event) => {
    event.preventDefault();
    const groupName = groupNameRef.current.value;
    const file = fileInputRef.current.files[0];

    if (!groupName || !file) {
      alert("Please provide a group name and upload an image.");
      return;
    }

    alert(`Group "${groupName}" created successfully!`);
    setModalVisible(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      {/* Welcome Message */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-semibold">Welcome back, {userName}!</h2>
        <p className="text-gray-500 mt-2">Here’s what’s happening today</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card title="Recent Activities" items={recentActivities} />

          {/* Upcoming Tasks */}
          <Card title="Upcoming Tasks" items={upcomingTasks} />
        </div>

        {/* Discussion Forums */}
        <Card
          title="Active Discussion Forums"
          items={[
            "Latest in Physics: 'What is the theory of relativity?'",
            "Chemistry: 'Understanding Organic Compounds'",
          ]}
        />

        {/* Study Groups */}
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
            onClick={() => setModalVisible(true)}
          >
            Create New Group
          </button>
        </div>

        {/* Mentorship Match */}
        <Card
          title="Mentorship Match"
          items={[
            "Dr. Smith (Physics) - Available for mentorship",
            "Prof. Johnson (Math) - Available for mentorship",
          ]}
        />

        {/* Achievements */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Achievements</h3>
          <div className="flex space-x-4">
            <Badge label="Top Contributor" color="bg-blue-200" />
            <Badge label="Active Student" color="bg-green-200" />
          </div>
        </div>
      </div>

      <Footer />

      {/* Create Group Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Create New Group</h2>
            <form onSubmit={handleCreateGroup}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="groupImage">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="groupImage"
                  ref={fileInputRef}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="groupName">
                  Group Name
                </label>
                <input
                  type="text"
                  id="groupName"
                  ref={groupNameRef}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setModalVisible(false)}
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
  );
};

/** Card Component */
const Card = ({ title, items }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 mb-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/** Badge Component */
const Badge = ({ label, color }) => (
  <div className={`${color} px-4 py-2 rounded`}>{label}</div>
);

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HomePage;
