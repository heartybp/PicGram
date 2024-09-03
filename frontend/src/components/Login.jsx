import React from 'react'
import {UserIcon, LockClosedIcon} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate('/profile');
  };

  return (
    <div className="flex h-screen">
      {/* sign in */}
      <div className="w-full flex flex-col items-center pt-44">

        <h2 className="text-center text-indigo-900 text-3xl font-semibold my-2">SIGN IN</h2>
        
        <div className="relative w-80"> {/* Username */}
          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300 w-6 h-6" />
          <input
            id="username"
            name="username"
            type="text"
            required
            className="pl-10 pr-3 py-2 my-1 w-full border border-gray-300 rounded-md placeholder-indigo-300 focus:outline-none focus:border-indigo-300"
            placeholder="Username"
          />
        </div>

        <div className="relative w-80"> {/* Password */}
          <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300 w-6 h-6" />
          <input
            id="password"
            name="password"
            type="password"
            required
            className="pl-10 pr-3 py-2 my-1 w-full border border-gray-300 rounded-md placeholder-indigo-300 focus:outline-none focus:border-indigo-300"
            placeholder="Password"
          />
        </div>

        <button 
          type="button" 
          onClick={handleLogin}
          className="w-80 flex justify-center py-2 px-4 my-3 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400">
          Login
        </button>


      </div>

      {/* PicGram */}
      <div className="w-full flex flex-col items-center pt-44 bg-gradient-to-br from-indigo-700 to-indigo-200 ...">
        <h2 className="text-5xl text-indigo-950 font-semibold">Welcome to</h2>
        <h1 className="text-8xl text-white font-bold">PicGram</h1>
      </div>


    </div>
    
  )
}

export default Login