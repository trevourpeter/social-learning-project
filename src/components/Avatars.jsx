import React from 'react';

const AvatarList = ({ users, activeUserId, onAvatarClick }) => {
    return (
        <div className="flex overflow-x-auto bg-gray-100 p-4 space-x-4">
            {users.map((user) => (
                <div key={user.id} className="text-center">
                    <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 text-white text-lg font-bold cursor-pointer ${
                            user.id === activeUserId ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => onAvatarClick(user.id)}
                    >
                        {user.name.charAt(0)}
                    </div>
                    <p className="text-sm mt-2">{user.name}</p>
                </div>
            ))}
        </div>
    );
};

export default AvatarList;
