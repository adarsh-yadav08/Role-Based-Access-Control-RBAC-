VRV Security Intern Assignment
==============================

The goal of this assignment is to assess your understanding and implementation skills regarding Authentication, Authorization, and Role-Based Access Control (RBAC). These are fundamental security concepts required for developing secure systems, ensuring that users can be authenticated properly, assigned roles, and granted access based on those roles.

Table of Contents
-----------------

*   [Features](#features)
    
*   [Technologies Used](#technologies-used)
    
*   [Installation and Setup](#installation-and-setup)
    
*   [API Endpoints](#api-endpoints)
    
*   [Google OAuth Configuration](#google-oauth-configuration)
    
*   [Usage](#usage)
    
*   [Contributing](#contributing)
    

Features
--------

*   **User Registration**: Users can register by providing a username, email, and password. During registration, roles can be assigned.
    
*   **User Login**: Users can log in with an email and password, receiving a JWT for authenticated requests.
    
*   **Role-Based Access Control (RBAC)**: Different user roles (e.g., Admin, User) restrict access to specific parts of the application.
    
*   **Google OAuth2 Login**: Users can log in via their Google accounts, with JWT tokens generated upon successful login.
    
*   **Protected Routes**: Routes are protected based on user roles, ensuring that only authorized users can access certain resources.
    
*   **JWT Authentication**: Secure token-based authentication using JWT to protect API endpoints.
    
*   **Logout**: Users can log out and invalidate their session.
    

Technologies Used
-----------------

*   **Backend**: Node.js, Express.js
    
*   **Authentication**: Passport.js (Google OAuth), JWT (JSON Web Tokens)
    
*   **Database**: MongoDB (Mongoose for modeling)
    
*   **Password Encryption**: bcrypt.js
    
*   **Frontend**: React.js, React Router for navigation
    
*   **Version Control**: Git and GitHub
  

Installation and Setup
----------------------

### Prerequisites

*   [Node.js](https://nodejs.org/) and npm (Node Package Manager)
    
*   [MongoDB](https://www.mongodb.com/) installed locally or a cloud-based MongoDB instance
    

### Step-by-Step Setup

1\. git clone https://github.com/Manav2031/VRV-Security-Intern-Assignment.git  
cd VRV-Security-Intern-Assignment

2\. cd server

Install server dependencies:

npm install

Create a .env file in the root of the server directory with the following variables:

JWT\_SECRET=your\_jwt\_secret

GOOGLE\_CLIENT\_ID=your\_google\_client\_id

GOOGLE\_CLIENT\_SECRET=your\_google\_client\_secret

MONGO\_URI=your\_mongodb\_uri

SESSION\_SECRET=your\_session\_secret

PORT=your\_port\_number

Run the backend server:

npm start

3\. cd client

npm install

Run the frontend:

npm start

4\. **Access the Application**:

The backend will be running on http://localhost:5000/

The frontend will be running on http://localhost:3000/
        

API Endpoints
-------------

### Authentication Endpoints:

*   **POST /api/auth/register**: Register a new user
    
*   **POST /api/auth/login**: Log in with email and password
    
*   **GET /api/auth/google**: Initiate Google OAuth login
    
*   **GET /api/auth/google/callback**: Google OAuth callback handler
    

### Role-Based Access Control:

*   **/user**: Welcomes User with a welcome message (User only)
    
*   **/admin**: Welcomes Admin with a welcome message (Admin only)
    

Google OAuth Configuration
--------------------------

1.  Go to the Google Developers Console.
    
2.  Create a new project and enable the **Google+ API** and **Google Identity API**.
    
3.  Create OAuth credentials (Client ID and Client Secret).
    
4.  In your .env file, add the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
    
5.  http://localhost:5000/auth/google/callback
    

Usage
-----

*   **User Registration**: Users can register via /register endpoint.
    
*   **Google Login**: Users can log in using Google OAuth by visiting /auth/google and following the login prompts.
    
*   **Access Admin Features**: Only users with the "Admin" role can access the /admin page.

*   **Access User Features**: Only users with the "User" role can access the /user page.
    

Contributing
------------

Contributions, issues, and feature requests are welcome!

To contribute:

1.  Fork this repository.
    
2.  Create a new branch (git checkout -b feature/your-feature-name).
    
3.  Make your changes.
    
4.  Commit your changes (git commit -m 'Add some feature').
    
5.  Push to the branch (git push origin feature/your-feature-name).
    
6.  Open a Pull Request.
