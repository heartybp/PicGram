import React from 'react'

const Navbar = () => {
    return (
        // add icons next to the navigation items
        <div className="flex h-screen bg-indigo-200 w-52 justify-center items-center" aria-label="sidebar">
        <div className="w-full">
            <ul className="text-lg text-indigo-400">
                <li><a className="block w-full py-3 hover:bg-indigo-300 hover:text-white font-semibold rounded pl-20" href="#home">Home</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-300 hover:text-white font-semibold rounded pl-20" href="#Profile">Profile</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-300 hover:text-white font-semibold rounded pl-20" href="#Feed">Feed</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-300 hover:text-white font-semibold rounded pl-20" href="#Settings">Settings</a></li>
            </ul>
        </div>

        </div>

    );
}

export default Navbar