import React from 'react'
import { useEffect, useRef } from 'react';
import Message from '../Message/Message.jsx';


const ChatInterface = ({ messages, loading }) => {
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-container flex-grow overflow-y-auto p-4 mt-20 animate-slideIn" style={{ maxHeight: 'calc(100vh - 225px)' }}>
            {messages.map((msg, index) => (
                <Message key={index} text={msg.text} type={msg.type} />
            ))}
            <div ref={chatEndRef} />
        </div>
    )
}

export default ChatInterface
