import React, { useState } from "react";
import UploadPreview from './UploadPreview'
import FullscreenPhoto from './FullscreenPhoto'
// import instagramIcon from '/instagram_icon.webp';


const Profile = () => {
  const [selectedImages, addImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const uploadImage = (image) => {
    setPreviewImage(image); // update previewImage state with 'image'
  };

  const previewSubmit = ({image, caption}) => {
    addImage((prevImages) => [...prevImages, {image, caption}]);
    setPreviewImage(null); // update previewImage state with 'null'
  };

  const openFullscreen = (image, caption) => {
    setFullscreenImage({image, caption});
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };


  return (
    <>
      {previewImage && 
        <UploadPreview
          image= {previewImage}
          onSubmit={previewSubmit}
          onClose={() => setPreviewImage(null)}
        />
      }

      {fullscreenImage && (
        <FullscreenPhoto
          image={fullscreenImage.image}
          caption={fullscreenImage.caption}
          onClose={() => setFullscreenImage(null)}
        />
      )}

      <div className="flex">
        <div className="mx-5 w-full h-screen bg-white rounded-lg my-5 border-gray-100 shadow-lg overflow-hidden">
          <div className="h-36 bg-indigo-200">
            <h2 className="px-7 py-4 pt-7 text-indigo-700 text-3xl font-semibold">
              Upload a Photo!
            </h2>
      
            <input
              type="file"
              name="post"
              className="px-7 text-transparent file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-lg file:font-semibold
                    file:bg-indigo-500 file:text-white
                    hover:file:bg-violet-100 flex items-center justify-center"
              onChange={(e) => {
                Array.from(e.target.files).forEach((file) => {
                  console.log(file);
                  uploadImage(file);
                });
              }}
            />
      
          </div>

          <div
            className="my-5 ml-5 py-5 pb-10 pr-5 grid grid-cols-3 gap-4 overflow-auto max-h-[calc(100vh-150px)]"
            aria-label="post-card"
          >
            {selectedImages.length > 0 &&
              selectedImages.map(({image, caption}, index) => (
                <div 
                  key={index} 
                  className="w-full h-72 cursor-pointer"
                  onClick={() => openFullscreen(image, caption)}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`uploaded-img-${index}`}
                    onLoad={() => URL.revokeObjectURL(image)}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="div">
        <div
          className="mx-2 mr-4 my-5 bg-white border-gray-300 rounded-lg shadow-md"
          aria-label="container"
        >
          <div
            className="flex items-center px-7 pt-5 pb-2 ml-1"
            aria-label="header"
          >
            <div
              className="w-20 h-20 rounded-full bg-gray-200"
              aria-label="img-container"
            >
              <img
                src="profile_photo_url"
                className="object-cover w-full h-full"
                aria-label="profile photo"
              ></img>
            </div>

            <div className="ml-4" aria-label="username container">
              <div
                className="username text-2xl font-semibold"
                aria-label="username"
              >
                funiimonkee
              </div>
            </div>
          </div>

          <div
            className="flex justify-around mx-7 pb-3"
            aria-label="info-container"
          >
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

          {/* Buttons and Description */}
          <div
            className="px-7 py-3 border-t border-gray-200"
            aria-label="user-description"
          >
            <div className="flex pb-3" aria-label="buttons">
              <button className="bg-indigo-400 rounded-md p-1 px-6 mr-3 font-semibold text-white">
                Follow
              </button>
              <button className="bg-indigo-50 rounded-md p-1 px-6 font-semibold">
                Message
              </button>
            </div>

            <h3 className="text-lg font-semibold">Hearty Parrenas</h3>
            <p>
              Hey, I'm Hearty! I love visiting new places like cafes and
              museums.
            </p>
          </div>
        </div>



        {/* Status Container */}

        <div
          className="mx-2 mr-4 my-5 bg-white px-7 py-3 border-gray-300 rounded-lg shadow-md"
          aria-label="container"
        >

    
            <div className="flex items-center my-1">
              <h3 className="text-lg font-semibold">Status</h3>
              <p className="ml-2">
                Feeling adventurous
              </p>
            </div>

            <div className="flex items-center my-1 pb-2">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="ml-2">
                Los Angeles, CA
              </p>
            </div>

            <div className="flex items-center py-2">
              <img src="/instagram_icon.webp" alt="" className="w-8 h-auto"/>
              <p className="ml-2">
                @instagram
              </p>

            </div>

            <div className="flex items-center py-2">
              <img src="/twitter_icon.png" alt="" className="w-8 h-auto rounded-md"/>
              <p className="ml-2">
                @twitter
              </p>
            </div>

            <div className="flex items-center py-2">
              <img src="/spotify_icon.png" alt="" className="w-8 h-auto rounded-md"/>
              <p className="ml-2">
                @spotify
              </p>
            </div>
            
      
        </div>
          
        </div>
        

        


      </div>
    </>
  );
};

export default Profile;
