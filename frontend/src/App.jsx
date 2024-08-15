import { useState } from 'react'
import './App.css'

import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-1">
        <Profile />
      </div>
    </div>

  )
}

export default App
