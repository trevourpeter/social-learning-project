import React from 'react';
import ChatBubble from './ChatBubble';

const ChatWindow = ({ messages, activeUserId }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          message={msg}
          isSender={msg.senderId === activeUserId}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
