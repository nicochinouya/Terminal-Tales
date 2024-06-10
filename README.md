# Terminal-Tales
Terminal Tales: Stories from the Command Line


This is a blog site tailored for developers, offering a platform to publish their latest insights, code snippets, and experiences in the tech world. With seamless authentication powered by express-session, developers can securely log in to share their thoughts and engage with a vibrant community.


## Project Description

This project is a CMS-style blog site designed to allow users to publish articles, blog posts, and share their thoughts and opinions. The site includes features for user authentication, blog post creation, editing, deletion, and commenting. Users can navigate through the homepage, view existing posts, and access their personal dashboard to manage their blog content.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up your environment variables by creating a `.env` file in the root directory. Add the following:
    ```sh
    DB_NAME=your_database_name
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password
    SECRET=your_secret_key
    ```
5. Initialize the database:
    ```sh
    npm run seed
    ```
6. Start the application:
    ```sh
    npm start
    ```

## Usage

1. **Homepage**: Upon visiting the site, you will be presented with the homepage which includes existing blog posts, navigation links for the homepage and the dashboard, and the option to log in.
2. **Navigation**: Use the navigation links to move between the homepage and the dashboard. You will be prompted to log in or sign up if you are not already authenticated.
3. **Sign Up**: Create a new account by entering a username and password.
4. **Log In**: Enter your credentials to access your account.
5. **Dashboard**: After logging in, you can access your dashboard to create, update, or delete your blog posts.
6. **Comments**: You can leave comments on blog posts while logged in.
7. **Log Out**: Use the logout option in the navigation to sign out of the site.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Blog Post Management**: Create, update, and delete blog posts.
- **Commenting System**: Leave comments on blog posts.
- **Responsive Design**: Mobile-friendly layout and design.
- **Session Management**: Automatic logout after a period of inactivity.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL or any preferred SQL database
- **ORM**: Sequelize
- **Authentication**: bcrypt

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Screenshot

https://github.com/nicochinouya/TerminalTales/blob/main/other-files/screenshot.png

Feel free to reach out if you have any questions or need further assistance. Happy blogging!