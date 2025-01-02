import React from 'react';

const AvatarList = ({ users, activeUserId }) => {
  return (
    <div className="flex overflow-x-auto bg-gray-100 p-4 space-x-4">
      {users.map((user) => (
        <div key={user.id} className="text-center">
          <img
            src={user.avatar}
            alt={user.name}
            className={`w-12 h-12 rounded-full ${
              user.id === activeUserId ? 'ring-2 ring-blue-500' : ''
            }`}
          />
          <p className="text-sm mt-2">{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AvatarList;
