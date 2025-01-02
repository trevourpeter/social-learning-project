import React from 'react';
import { FiBell, FiUser, FiMessageSquare } from 'react-icons/fi';
import Header from '../components/Header';

const HomePage = () => {
  const userName = "John Doe"; // For now, using a hardcoded name
  const recentActivities = [
    "Joined the Math Study Group",
    "Commented on a Physics Discussion",
    "Requested mentorship from Dr. Smith"
  ];

  const upcomingTasks = [
    "Complete Physics Assignment (Due: Jan 5th)",
    "Meeting with Mentor (Jan 6th, 10:00 AM)"
  ];

  return (
    <div className="bg-gray-50 h-full">

      <Header />

      {/* Welcome Message */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-semibold">Welcome back, {userName}!</h2>
        <p className="text-gray-500 mt-2">Here’s what’s happening today:</p>
      </div>

      {/* Main Dashboard */}
      <div className="mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Recent Activities */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="list-disc pl-5">
              {recentActivities.map((activity, index) => (
                <li key={index} className="text-gray-700 mb-2">{activity}</li>
              ))}
            </ul>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Tasks</h3>
            <ul className="list-disc pl-5">
              {upcomingTasks.map((task, index) => (
                <li key={index} className="text-gray-700 mb-2">{task}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discussion Forum Highlights */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Active Discussion Forums</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-2">Latest in Physics: "What is the theory of relativity?"</li>
            <li className="text-gray-700 mb-2">Chemistry: "Understanding Organic Compounds"</li>
          </ul>
        </div>

        {/* Group Study Invitations */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Group Study Invitations</h3>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Join Math Study Group</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Create New Study Group</button>
          </div>
        </div>

        {/* Mentorship Match */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Mentorship Match</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-2">Dr. Smith (Physics) - Available for mentorship</li>
            <li className="text-gray-700 mb-2">Prof. Johnson (Math) - Available for mentorship</li>
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

      
    </div>
  );
};

export default HomePage;
