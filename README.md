# react-redux-jwt-auth-flow-and-user-session-using-redis
Sample project for auth flow using React, React Router, Redux, jwt and redis

##Description
This project uses React, React Router, Redux store, jsonwebtoken and redis server to manage user session. It is running on express server. For providing better experience to users the users should not be logged out for a sufficient period of time. 

##Token-Based Approach
A token is assigned to a user at the time of login. The token is created using jsonwebtoken. The token is then stored in the localStorage and returned with each request so requests to private routes can be protected by providing right middleware and verifying the token for the user.

You can encrypt the information before passing it in the token. Which is not the scope of this project.

The user token is refreshed every time to provide uninterrupted access to the user until the user keeps coming to the app.

In this app for demonstration purposes I have used the lifetime of token as 5 minutes and it is refreshed every 20 seconds as long as user stays on the application main page.

This project doesn't use any other database to store user data. You can use a database of your choice and just add code to signup and login

##Important places to look for

 /server.js
 /utils/

##Try it

git clone

npm install

http://localhost:8888
