import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AvatarList from '../components/Avatars';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [activeUserId, setActiveUserId] = useState(1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulate fetching users from an API
        const fetchedUsers = [
            { id: 1, name: 'Alice', avatar: '/avatars/alice.jpg' },
            { id: 2, name: 'Bob', avatar: '/avatars/bob.jpg' },
            { id: 3, name: 'Charlie', avatar: '/avatars/charlie.jpg' },
        ];
        setUsers(fetchedUsers);
    }, []);

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
            <Header />
            <AvatarList users={users} activeUserId={activeUserId} />
            <ChatWindow messages={messages} activeUserId={activeUserId} />
            <MessageInput onSend={handleSendMessage} />
            <Footer />
        </div>
    );
};

ChatApp.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ),
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            senderId: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
        })
    ),
    activeUserId: PropTypes.number,
};

export default ChatApp;
