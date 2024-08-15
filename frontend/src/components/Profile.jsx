import React from 'react'

const Profile = () => {
  return (
    <div className="max-w-md mx-auto bg-white border-gray-300 rounded-lg shadow-md" aria-label="container">

      <div className="flex items-center px-7 pt-5 pb-2 ml-4" aria-label="header">
        <div className="w-20 h-20 rounded-full bg-gray-200" aria-label="img-container">
          <img src="profile_photo_url" className="object-cover w-full h-full" aria-label="profile photo"></img>
        </div>

        <div className="ml-5" aria-label="username container">
          <div className="username text-2xl font-semibold" aria-label="username">funiimonkee</div>
        </div>
        
      </div>

      <div className="flex justify-around px-10 pb-3" aria-label="info-container">
        <div className="text-center" aria-label="post-info">
          <h3 className="text-lg font-semibold">Posts</h3>
          <p>4</p>
        </div>

        <div className="text-center" aria-label="followers-info">
          <h3 className="text-lg font-semibold">Followers</h3>
          <p>365</p>
        </div>

        <div className="text-center" aria-label="following-info">
          <h3 className="text-lg font-semibold">Following</h3>
          <p>342</p>
        </div>
      </div>

      <div className="px-10 py-3 border-t border-gray-200" aria-label="user-description">
        <h3 className="text-lg font-semibold">Hearty Parrenas</h3>
        <p>
          Hey, I'm Hearty! I love visiting new places like cafes and museums.
        </p>
      </div>
      
      <div className="px-10 pb-5" aria-label="buttons">
        <button className="bg-indigo-400 rounded-md p-1 px-6 mr-3 font-semibold text-white">Follow</button>
        <button className="bg-indigo-50 rounded-md p-1 px-6 font-semibold">Message</button>
      </div>

    </div>
  );
};



export default Profile;
