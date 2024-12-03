
## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
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

