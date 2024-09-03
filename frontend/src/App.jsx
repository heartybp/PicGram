import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css'

import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/profile',
    element: (
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-1 bg-indigo-50">
          <Profile />
        </div>
      </div>
    ),
  },
]);



const App = () => {
  return <RouterProvider router={router} />;
};


export default App
