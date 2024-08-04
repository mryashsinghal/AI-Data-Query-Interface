import React from 'react'


const Header = () => {
    return (
        <header className="fixed top-0 w-full p-4 bg-white shadow-md flex justify-between items-center animate-fadeIn">

            <h1 className="text-xl font-bold">QueryEase</h1>
            <img src="download.png" alt="" className='w-12 border-4' />
        </header>
    )
}

export default Header
