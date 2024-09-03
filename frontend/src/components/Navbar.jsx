import React from 'react'
import {HomeIcon, UserIcon, NewspaperIcon, Cog8ToothIcon} from '@heroicons/react/24/outline'


const Navbar = () => {
    return (
        // add icons next to the navigation items
        <div className="flex h-screen bg-indigo-300 w-52 justify-center items-center" aria-label="sidebar">
        <div className="w-full">
            <ul className="text-lg text-indigo-500">
                <li><a className="block w-full py-3 hover:bg-indigo-400 hover:text-white font-semibold rounded pl-12 flex items-center" href="#home"><HomeIcon className="w-6 h-6 mr-3" />Home</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-400 hover:text-white font-semibold rounded pl-12 flex items-center" href="#Profile"><UserIcon className="w-6 h-6 mr-3" />Profile</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-400 hover:text-white font-semibold rounded pl-12 flex items-center" href="#Feed"><NewspaperIcon className="w-6 h-6 mr-3" />Feed</a></li>
                <li><a className="block w-full py-3 hover:bg-indigo-400 hover:text-white font-semibold rounded pl-12 flex items-center" href="#Settings"><Cog8ToothIcon className="w-6 h-6 mr-3" />Settings</a></li>
            </ul>
        </div>

        </div>

    );
}

export default Navbar