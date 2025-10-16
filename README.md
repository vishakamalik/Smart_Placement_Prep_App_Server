# Smart Placement Prep Simulator (Server)

The backend service for the Smart Placement Prep Simulator, built with the MERN stack (Node.js, Express, MongoDB).
It handles all quiz-related operations — including fetching randomized questions, evaluating test results, and managing data for the placement preparation platform.


**📝 Overview**

This backend powers the Smart Placement Prep Simulator web app.
It provides secure REST APIs to deliver random MCQs from various multiple domains (like cs fundamentals, programming, aptitude, softskills, verbal ability) stored in MongoDB.
It ensures fair question distribution, clean data flow, and supports result evaluation on the client side.


**🚀 Features**

**✅ Topic-Based MCQ APIs** – Fetches random questions for any selected topic.

**✅ Dynamic Randomization** – Uses MongoDB’s aggregation pipeline for random question selection.

**✅ Result Evaluation Endpoint** – Validates user responses and returns score with correct/incorrect stats.

**✅ MongoDB Integration** – Stores all questions, options, and correct answers efficiently.

**✅ Clean API Design** – RESTful routes for scalable integration with the React frontend.

**✅ Error Handling & Validation** – Ensures reliable responses with proper error codes.


**🛠️ Tech Stack**

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Environment Management:** dotenv

**CORS Handling:** cors middleware

**API Testing:** Postman / Thunder Client
