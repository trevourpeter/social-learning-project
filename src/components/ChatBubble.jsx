import React from 'react';

const ChatBubble = ({ message, isSender }) => {
  return (
    <div
      className={`flex ${
        isSender ? 'justify-end' : 'justify-start'
      } my-2 px-4`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg shadow ${
          isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        <p>{message.content}</p>
        <span className="text-xs text-gray-500 block mt-2">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
