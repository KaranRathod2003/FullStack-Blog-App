

# Blog Application

The Blog Management System is a feature-rich application designed for creating, managing, and interacting with blog posts. It provides both a user-friendly web interface and RESTful APIs for operations such as creating, reading, updating, and deleting blog posts. The system ensures secure user authentication and supports seamless navigation for registered users.

## Features

1. User Authentication:
```sh
  Registration and login with hashed passwords for security.
  JWT-based authentication to protect sensitive routes.
  Secure cookie handling for sessions.
```

2. Blog Management:
```sh
CRUD operations (Create, Read, Update, Delete) for blog posts.
Role-based access control to ensure secure updates and deletions.
```

3. Responsive Interface:
```sh
Dynamic and responsive frontend powered by EJS templates and Tailwind CSS.
```

4. RESTful API:
```sh
APIs for CRUD operations, allowing integration with other systems.
```
5. Database:
```sh
MongoDB used for data persistence
```

## Technologies Used

`Backend`: Node.js, Express.js
`Frontend`: EJS, Tailwind CSS
`Database`: MongoDB
`Authentication`: JWT, Bcrypt
`APIs`: RESTful services for blog data handling


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/KaranRathod2003/FullStack-Blog-App.git
    <!-- cd <repository-directory> -->
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    JWT_SECRET='Secret_Key'
    ```

4. Start the application:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication

- `POST /create` - Create a new blog post
- `GET /read` - Read all blog posts
- `GET /update/:id` - Get a blog post by ID for updating
- `POST /update/:id` - Update a blog post by ID
- `GET /delete/:id` - Delete a blog post by ID

### REST API

- `GET /api/posts` - Get all blog posts
- `POST /api/posts` - Create a new blog post
- `GET /api/posts/:id` - Get a blog post by ID

### Other

- `GET /logout` - Logout and clear JWT token

## Views

- `index.ejs` - Home page
- `login.ejs` - Login page
- `read.ejs` - Page to read all blog posts
- `register.ejs` - Registration page
- `update.ejs` - Page to update a blog post

## Models

- `blog.js` - Blog model
- `db.js` - Database connection
- `user.js` - User model

## Public

- `stylesheets/style.css` - CSS styles

## Deployment Status

The project has been fully developed with all features functioning as intended in the local environment. The deployment phase, however, has been deferred due to billing constraints associated with Azure and Firebase.

While the deployment environment is currently limited, all configurations and project files, including the `README.md`, have been uploaded to GitHub to ensure easy integration and scalability for future deployments.


## Justification for Deployment Delay

As a college student and a fresher, I have extensively worked on the backend logic, authentication mechanisms, and API integrations. I successfully built and tested all components in a local environment. Deployment remains pending due to the billing requirements of cloud platforms. While I am still familiarizing myself with deployment processes, I prioritized core development to showcase my programming proficiency.

This approach demonstrates my ability to handle application logic and API development while maintaining adaptability for deployment and scaling in professional environments.

