import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
            <p>© 2025 LearningHub. All Rights Reserved.</p>
            <p className="mt-2">
                <a href="/tos" className="hover:underline">Terms of Service</a> |{" "}
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </p>
        </footer>
    );
};

export default Footer;