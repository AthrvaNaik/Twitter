
# Twitter-like Application

This is a full stack Twitter-like application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to register, login, create tweets, follow/unfollow users, and more.

## Features

- User Registration and Login
- Create, Delete Tweets
- Bookmark Tweets
- Follow/Unfollow Users
- View User Profiles
- View All Tweets and Following Tweets

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Redux
- bcrypt.js
- jsonwebtoken
- Toaster

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AthrvaNaik/Twitter.git
   cd Twitter
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. Install additional dependencies:

   ```bash
   npm install bcryptjs redux react-redux react-toastify jsonwebtoken
   ```

## Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

## Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. Start the client:

   ```bash
   cd ../client
   npm start
   ```

## API Endpoints

### User Authentication

- **POST /api/auth/register**: Register a new user
  - Request body: `{ "username": "string", "email": "string", "password": "string" }`

- **POST /api/auth/login**: Login a user
  - Request body: `{ "email": "string", "password": "string" }`

- **GET /api/auth/logout**: Logout a user

### Tweets

- **POST /api/tweets**: Create a new tweet
  - Request body: `{ "content": "string" }`

- **DELETE /api/tweets/:id**: Delete a tweet
  - URL parameter: `id` - ID of the tweet to delete

- **PUT /api/tweets/:id/bookmark**: Bookmark a tweet
  - URL parameter: `id` - ID of the tweet to bookmark

- **GET /api/tweets**: Get all tweets

- **GET /api/tweets/following**: Get tweets from followed users

### User Profiles

- **GET /api/users/me**: Get the logged-in user's profile

- **GET /api/users/:id**: Get another user's profile
  - URL parameter: `id` - ID of the user

- **POST /api/users/:id/follow**: Follow a user
  - URL parameter: `id` - ID of the user to follow

- **POST /api/users/:id/unfollow**: Unfollow a user
  - URL parameter: `id` - ID of the user to unfollow



Make sure to replace placeholders like `<your_mongodb_uri>` and `<your_jwt_secret>` with your actual configuration values.
