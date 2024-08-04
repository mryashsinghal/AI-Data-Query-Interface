import React from 'react'
import { useState } from 'react';

const Input = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };
    return (
        <div className='flex content-center justify-center w-11/12 ml-14 rounded-3xl h-14 text-center z-10 fixed bottom-16 bg-white shadow-md p-4 animate-fadeIn '>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow outline-0 p-2 w-full bg-transparent h-full ml-2 transition-colors"
                placeholder="Type your query..."

            />
            <button onClick={handleSend} className="">
                Send
            </button>

        </div>
    )
}

export default Input
