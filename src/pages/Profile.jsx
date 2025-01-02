import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    profilePicture: '/path/to/avatar.jpg',
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveChanges = () => {
    setUser(formData);
    setEditMode(false);
  };

  const cancelChanges = () => {
    setFormData(user);
    setEditMode(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>

      {/* Profile Details Form */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Profile Details</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!editMode}
              className={`w-full p-2 border rounded-lg ${
                editMode ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              disabled={!editMode}
              className={`w-full p-2 border rounded-lg ${
                editMode ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!editMode}
              className={`w-full p-2 border rounded-lg ${
                editMode ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      {editMode && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-600">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-4">
        {editMode ? (
          <>
            <button
              onClick={saveChanges}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save Changes
            </button>
            <button
              onClick={cancelChanges}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
