# 14905webtechnology2023
Project Documentation
About the App:

This app is a simple app with the following functions: create, read, update and delete, also known as CRUD, with the additional feature of rating posts.

When a users starts the application, they are presented with a list of posts that have been created. From there they are met with few options: They can either delete, create, edit or rate a post. By pressing on a new post button they are allowed to enter into a text box which later on saves it.

Users are also able to edit and change the already published posts by clicking on edit, they are taken to the form where they can rewrite the entire content. Once they submit the form, the post is updated in the list of posts and saved.

Additionally, users can rate other users' posts on a scale of 1-5 by clicking on the "Rate" button next to the post they want to rate. They are taken to a form where they can enter their rating. Once they submit the form, the post's rating is updated in the list of posts and saved.

Finally, users can delete their own posts by clicking on the "Delete" button next to the post they want to delete.

To sum it all up - this web app allows users to create, update, read and delete blog posts with a user-friendly interface designed with css, also the rating feature was implemented, it allows you to rate each of the blog posts from 1-5, which would in turn help users identify the most relevant posts.The app itself is powered by node.js and express and with a simple and yet functional layout,can greatly improve your blogging abilities.

To run the application locally, follow these steps:
    Before getting started make sure that your computer has the following installed: Node.js and npm.
    Clone the repository to your local machine
    Navigate to the project directory
    Install the required dependencies using the command npm install
    Start the application using the command node index.js or npm start
    Open your web browser and go to http://localhost:3000

Application Dependencies:
Express - Express serves as a provider of a set of features that are important for the creation of a web app, such as middleware, routing and HTTP utilities.
Body-Parser - BP is a middleware for express which allows for parsing the body request in a format of JSON or Url.
Ejs - Ejs is a template engine that allows you to generate HTML markup with JS.
Path - This module allows it to work with the file directory path.
Fs - This one is a built-in module intended for working with the filesystem, reading and writing files and creating directories.


Project Structure

root/
-node_modules/
-public/
     styles.css
-views/
     edit-post.ejs
     index.ejs
     rate-post.ejs
-index.js
-package.json
-package-lock.json
-README.md

    node_modules/: contains the installed dependencies
    public/: contains static assets, in this case CSS
    views/: contains the EJS templates for the application
    index.js: the main application file where the routes and middleware are defined
    package.json: the file that contains the application's metadata and dependencies
    package-lock.json: a lock file that ensures consistent installation of dependencies
    README.md: this file

This file structure is suitable for a blogging application because it adheres to the accepted guidelines for a Node.js application, placing the main script at the root level and the views and static assets in their corresponding folders. In order to guarantee that the application's dependencies may be installed uniformly across various environments, the package.json and package-lock.json files are also supplied.

Links: GitHub Repo: https://github.com/00014905wiut/14905webtechnology2023
Link to the Code on Glitch: https://glitch.com/edit/#!/enshrined-quaint-perch
Link to Glitch Deployed Web App: https://enshrined-quaint-perch.glitch.me

Note: Deployed app will most likely not work as glitch does not allow for longer than 5 minutes of inactivity, might need to be reactivated from the code part for it to be live again.