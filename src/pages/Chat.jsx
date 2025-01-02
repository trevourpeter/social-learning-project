import React, { useState } from 'react';
import AvatarList from '../components/Avatars';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [activeUserId, setActiveUserId] = useState(1);

  const users = [
    { id: 1, name: 'Alice', avatar: '/avatars/alice.jpg' },
    { id: 2, name: 'Bob', avatar: '/avatars/bob.jpg' },
    { id: 3, name: 'Charlie', avatar: '/avatars/charlie.jpg' },
  ];

  const handleSendMessage = (content) => {
    const newMessage = {
      senderId: activeUserId,
      content,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <AvatarList users={users} activeUserId={activeUserId} />
      <ChatWindow messages={messages} activeUserId={activeUserId} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
