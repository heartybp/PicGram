# PicGram

https://github.com/user-attachments/assets/12057407-5899-4b2f-ab1d-b347a15cf9e8


PicGram is a **media sharing application** that enables users to upload photos, comment on posts, and interact with others through real-time updates, user discovery, and social networking features.

## Features

- **Photo Uploading & Commenting System**: Users can upload photos, view other posts, and leave comments with real-time updates.
- **Real-time Updates [In Progress]**: Instant updates across the platform to ensure users can engage with content immediately.
- **User Discovery [In Progress]**: Search functionality to find other users on the platform.
- **Social Networking [In Progress]**: Follow other users and receive updates on their activities.
- **User Authentication[In Progress]**: Secure login system with support for customizable user profiles.
- **Profile Management**: Users can create, update, and customize their personal profiles.

## Tech Stack

- **Frontend**: 
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
  
- **Backend**:
  - [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 engine.
  - [Express](https://expressjs.com/): A web application framework for Node.js.
  
- **Database**:
  - [MongoDB](https://www.mongodb.com/): A NoSQL database for scalable applications.

## Getting Started

**This project is still under development. Downloads are not yet recommended.**  
To run this project locally, follow these steps:

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (local instance or cloud-based service)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/heartybp/PicGram.git
   cd PicGram
   ```

2. **Install dependencies for both the frontend and backend:**

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `/server` directory and configure the following variables:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   # Backend (server directory)
   npm run dev

   # Frontend (client directory)
   npm start
   ```

5. **Open your browser:**

   Navigate to `http://localhost:3000` to view the application.

## Project Structure

```
├── frontend                # React frontend code
│   ├── public            # Public assets
│   └── src               # React components, hooks, etc.
├── backend                # Backend code
│   ├── models            # Mongoose models
│   ├── routes            # Express routes
│   ├── controllers       # Route handlers
│   └── middleware        # Authentication middleware
├── .env                  # Environment variables
└── README.md             # Project README
```

## License

This project is licensed under the [MIT License](LICENSE).  
© 2024 Hearty Parrenas. All rights reserved.
