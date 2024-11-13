# Rateflix

## Project Description
Rateflix is a movie rating platform where users can interact, leave opinions, and rate movies. The goal is to create a space for users to share their thoughts through star ratings and comments while browsing movies by genre or release year. Currently, the project is in its initial stages, displaying a basic interface.

## Deployment Link
The live deployment of this project can be accessed here: [Rateflix on Render](https://your-app-name.onrender.com)  
(Note: Replace this placeholder with your actual Render URL)

## Table of Contents
- [Project Description](#project-description)
- [Deployment Link](#deployment-link)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

## Features
- Google Sign-In for user authentication
- Star ratings and 100-word limit comments for each movie
- Option to reply to other users' comments
- Genre filtering and movie release year filtering

*Note: These features are planned for future updates. Currently, the deployed app displays the Rateflix title with a blue-and-white background.*

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **Create React App**: Tool to set up the modern web app structure
- **Vite**: Build tool for a faster and leaner development experience

#### Files
- `index.js`: Main entry for React
- `index.html`: Root HTML file for the application
- `package.json`: Project metadata and dependencies

### Backend
- **Express**: Web framework for Node.js
- **Sequelize**: ORM for databases, supporting PostgreSQL
- **PostgreSQL**: Database for storing user and movie information
- **dotenv**: For managing environment variables
- **CORS**: Middleware to handle cross-origin requests
- **bcrypt**: For hashing passwords
- **jsonwebtoken**: For handling JSON Web Tokens for secure user sessions

#### Backend Files
- `server.js`: Main server file
- `userRoutes.js`: Routes for user-related operations
- `package.json`: Backend project metadata and dependencies

### Development Tools
- **ESLint**: Tool for identifying patterns and potential errors in JavaScript
- **npm scripts**: Scripts for development, building, and linting

## Installation
To run Rateflix locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rateflix.git
