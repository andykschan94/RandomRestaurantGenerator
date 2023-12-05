# Random Restaurant Generator

## Overview

This project is a simple web application that utilizes React for the frontend and Firebase for the backend. 
It aims to generate a random restaurant's name based on user's input.

## Technologies Used

- **Frontend**: React
- **Backend**: Firebase

# Prerequisites

- Node.js and npm installed
- Create a .env file which stores api keys in backend

# Important
- Remember to start up both backend and app

# To Start the App and Backend

## Starting the App
```javascript
cd app
npm install
npm start
```

## Starting the Backend

### Setting up .env file
Create a .env file in backend and input api config
```
REACT_APP_FIREBASE_API_KEY = Input_API_Key
REACT_APP_FIREBASE_AUTH_DOMAIN = Input_Auth_Domain
REACT_APP_FIREBASE_PROJECT_ID = Input_Project_ID
REACT_APP_FIREBASE_STORAGE_BUCKET = Input_Storage_Bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = Input_Messaging_Sender_ID
REACT_APP_FIREBASE_APP_ID = Input_App_ID
```

### Setting up backend
```javascript
cd backend
npm install
npm run dev
```
Once the backend started running you can start querying.

# Sample Queries and Responses

## POST /restaurant/create
```javascript
Body: {
  "name": "Lora's Dinner"
}

Response: "success": true
```

## GET /restaurants
```javascript
Response: {
  {
    "name": [
      "Andyy's Diner",
      "KFC",
      "KFC's Diner"
    ]
  }
}
```
