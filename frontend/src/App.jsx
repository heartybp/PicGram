import { useState } from 'react'
import './App.css'

import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Profile />
    </>
  )
}

export default App
