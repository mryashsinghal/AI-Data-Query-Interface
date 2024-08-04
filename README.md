# QueryEase
Welcome to **QueryEase**, the AI-Powered Data Query Interface designed to simplify data queries by allowing users to input queries in natural language. The system then translates these queries into MongoDB queries, retrieves the relevant data, and displays it in an intuitive format.

This project was developed for the Woodpecker Hackathon and is intended to demonstrate an innovative solution for handling complex data queries with ease.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
- **Natural Language Processing:** Converts plain English queries into MongoDB queries.
- **Real-Time Data Fetching:** Retrieves and displays data from the database in real-time.
- **User-Friendly Interface:** Intuitive UI for easy query input and result display.
- **Scalable Architecture:** Designed with scalability and performance in mind.
- **Error Handling:** Robust error handling to manage invalid inputs and system errors.

## Tech Stack
- **Frontend:** Vite, React, TailwindCSS
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **AI Integration:** OpenAI API for natural language processing

## Architecture
```sh
          +-------------------------+
          |       Frontend          |
          |   (Vite + React +       |
          |    TailwindCSS)         |
          +-----------+-------------+
                      |
                      |
          +-----------v-------------+
          |         Backend          |
          |  (Node.js + Express.js)  |
          +-----------+-------------+
                      |
                      |
          +-----------v-------------+
          |      OpenAI API         |
          +-------------------------+
                      |
                      |
          +-----------v-------------+
          |        MongoDB          |
          +-------------------------+
```
## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud instance)

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/mryashsinghal/queryease.git
    cd queryease
    ```

2. **Install dependencies for the backend:**
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend:**
    ```bash
    cd ../my-project
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file in the backend directory and add your MongoDB connection string and OpenAI API key.
    ```plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdatabase?retryWrites=true&w=majority
    OPENAI_API_KEY=your_openai_api_key
    ```

5. **Run the backend server:**
    ```bash
    cd backend
    npm start
    ```

6. **Run the frontend server:**
    ```bash
    cd ../my-project
    npm run dev
    ```

## Usage
1. **Navigate to the frontend URL:** Open your browser and go to `http://localhost:3000`.
2. **Enter a natural language query:** Type your query into the input field (e.g., "Show me all employees living in the city Springfield").
3. **View results:** The system will process the query and display the results from the MongoDB database.


## Future Enhancements
- **Advanced Query Capabilities:** Support for more complex queries and filters.
- **User Authentication:** Secure login and personalized query history.
- **Enhanced UI:** More interactive and responsive design elements.

## Contributing
We welcome contributions from the community. Please fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgments
- **OpenAI:** For providing the API to translate natural language queries.
- **MongoDB:** For providing a scalable database solution.
- **Woodpecker Hackathon:** For the opportunity to develop and showcase this project.

---
