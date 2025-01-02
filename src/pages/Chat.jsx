import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AvatarList from '../components/Avatars';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [activeGroupId, setActiveGroupId] = useState(1);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        // Simulate fetching groups from an API
        const fetchedGroups = [
            { id: 1, name: 'Group A', avatar: '/avatars/groupA.jpg' },
            { id: 2, name: 'Group B', avatar: '/avatars/groupB.jpg' },
            { id: 3, name: 'Group C', avatar: '/avatars/groupC.jpg' },
        ];
        setGroups(fetchedGroups);
    }, []);

    const handleSendMessage = (content) => {
        const newMessage = {
            senderId: activeGroupId,
            content,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <AvatarList users={groups} activeUserId={activeGroupId} />
            <ChatWindow messages={messages} activeUserId={activeGroupId} />
            <MessageInput onSend={handleSendMessage} />
            <Footer />
        </div>
    );
};

ChatApp.propTypes = {
    groups: PropTypes.arrayOf(
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
    activeGroupId: PropTypes.number,
};

export default ChatApp;
