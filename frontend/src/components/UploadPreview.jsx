// UploadPreview component is a popup that allows you to preview an uploaded image 
// and add a caption before displaying it onto your profile

import React, {useState} from 'react'

const UploadPreview = ({image, onSubmit, onClose}) => {

  const [caption, setCaption] = useState("");

  const changeCaption = (e) => {
    setCaption(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit({image, caption});
    onClose();
  }

  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg">
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="w-full h-60 object-cover rounded-md"
        />
        <textarea
          className="w-full mt-3 p-2 border rounded-md"
          placeholder="Add a caption..."
          value={caption}
          onChange={changeCaption}
        />
        <div className="flex justify-end mt-3">
          <button
            className="bg-gray-300 px-4 py-2 mr-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadPreview