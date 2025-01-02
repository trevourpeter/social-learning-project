import React from 'react';
import { FiBell, FiMessageSquare, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();
    return (
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <h1 onClick={()=>{nav("/home")}}  className="text-xl font-bold cursor-pointer">LearningHub</h1>
            <div className="flex space-x-4">
                <button className="relative">
                    <FiBell size={24} />
                    <span className="absolute top-0 right-0 text-xs text-red-500">3</span>
                </button>
                <button onClick={()=>{nav("/chat")}}>
                    <FiMessageSquare size={24} />
                </button>
                <button>
                    <FiUser size={24} />
                </button>
            </div>
        </div>
    );
};

export default Header;