# Random Restaurant Generator

## Overview

This project is a simple web application that utilizes React for the frontend and Firebase for the backend. 
It aims to generate a random restaurant's name based on user's input.

## Technologies Used

- **Frontend**: React
- **Backend**: Firebase

# Prerequisites

- Node.js and npm installed

# Important
- Remember to start up both backend and app

# To Start the App and Backend

## Running the App
```javascript
cd app
npm install
npm start
```

## Running the Backend
Once the backend started running you can start querying.
```javascript
cd backend
npm install
npm run dev
```

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
  "restaurantData": [
    {
      "name": [
        "Popeyes",
        "MacDonalds",
        "KFC",
        "Fisher's Dinner",
        "Lora's Dinner"
      ]
    }
  ]
}
```
