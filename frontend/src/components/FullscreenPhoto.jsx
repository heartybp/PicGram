import React, { useState } from "react";

const FullscreenPhoto = ({ image, caption, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg w-4/6 h-4/6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold my-2 ">@funiimonkee's post</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>

        <div className="flex">
          <div className="div w-2/4 mr-5 flex flex-col items-center">
            <img
              src={URL.createObjectURL(image)}
              alt="full-screen-preview"
              className="object-cover w-full h-80  mb-3 rounded-lg"
            />
            <p className="mb-3 text-indigo-500 font-semibold">{caption}</p>
          </div>

          <div className="mb-3 w-2/4 h-96 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            {comments.length > 0 ? (
              <ul className="mb-3">
                {comments.map((comment, index) => (
                  <li key={index} className="mb-2">
                    {comment}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}

            <input
              type="text"
              placeholder="Comment on this post..."
              value={newComment}
              onChange={handleCommentChange}
              className="border border-gray-300 rounded-md p-2 w-full mb-2 focus:outline-none focus:border-indigo-700"
            />
            <button
              onClick={handleAddComment}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenPhoto;
