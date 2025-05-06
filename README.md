# F1_INTERNSHIPS_WEBSITE
This is a web application designed to help F1 students find internships that sponsor international students. The project is built using React and Vite for the frontend and Express.js with MySQL for the backend.

<img width="944" alt="image" src="https://github.com/user-attachments/assets/84c93bc3-9401-454b-beff-13bb18f64399" />

## Features

- **Search Internships**: Search for internships by role, company, or title.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Data**: Fetch internship data from a MySQL database via an Express.js backend.
- **Routing**: Includes client-side routing using React Router.

  <img width="709" alt="image" src="https://github.com/user-attachments/assets/3cc924cb-4658-4c86-a12a-a9eb16d08c7f" />

## Project Structure

### Frontend
The frontend is located in the `Frontend/` directory and is built with React and Vite.

Key files:
- `src/pages/Home.jsx`: Main page displaying internships.
- `src/pages/cards.jsx`: Component for rendering individual internship cards.
- `src/pages/data.jsx`: Static data for internships (used for testing).
- `vite.config.js`: Vite configuration file.

### Backend
The backend is located in the `Backend/` directory and is built with Express.js.

Key files:
- `server.js`: Express server that connects to a MySQL database and serves internship data.
- `.env`: Environment variables for database configuration.

## Installation

### Prerequisites
- Node.js (v16 or later)
- MySQL database

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd F1_Internships_Website

2. Install dependencies for the frontend:
    cd Frontend
    npm install

3. Install dependencies for the backend:
    cd ../Backend
    npm install

4. Configure the backend:
    Create a .env file in the Backend/ directory with the following variables:
    >
    HOST=<your-database-host     
    USER=<your-database-username>
    PASSWORD=<your-database-password>
    DATABASE=<your-database-name>

5. Start the MySQL database and ensure it contains a table named internships - opt_cpt     internships with the required data.

## Running the Application
1. Start the Backend:
    cd Backend
    node [server.js](http://_vscodecontentref_/1)

2. Start the Frontend:
    cd Frontend
    npm run dev

## Scripts
npm run dev: Start the development server.
node server.js: Start the Express server.

## Technologies Used
1. Frontend
React, ![image width="200" height="50"](https://github.com/user-attachments/assets/2fec9033-1a2d-4763-96c5-2161d5acd44a)
Vite,![image](https://github.com/user-attachments/assets/921c6e29-eec0-4f5e-92d8-be3186424d2b)
React Router, ![image](https://github.com/user-attachments/assets/a0420995-542a-4fea-99d1-c3797754c0a7)
CSS ![image](https://github.com/user-attachments/assets/1a443e1f-7323-4238-83af-14f5bdebdf94)
HTML, ![image](https://github.com/user-attachments/assets/68b52f1b-aa19-46b4-b199-4d5d149fce3f)
Javascript, ![image](https://github.com/user-attachments/assets/92662799-c396-4fcf-8611-c8199e3f59dd)

2. Backend
Express.js,![image](https://github.com/user-attachments/assets/5df67604-e12c-4173-8e95-ce631bacc84b)

MySQL, ![image](https://github.com/user-attachments/assets/8390be96-78bb-4237-b931-3cc10cac6718)

dotenv for environment variable management

## Contact
For any questions or feedback, please contact [iftikhm@plu.edu] || [mahnooriftikharr@gmail.com]
