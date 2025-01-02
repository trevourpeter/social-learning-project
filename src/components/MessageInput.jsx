import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 bg-white border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg mr-2"
      />
      <button
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
