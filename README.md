This is the BACKEND of a Food Ordering App built with the **MERN stack**.  
It provides RESTful APIs for authentication, restaurants, and order management.



 🚀 Tech Stack
- Node.js + Express – Server and API framework
- MongoDB Atlas + Mongoose – Database and schema modeling
- JWT (jsonwebtoken) – User authentication
- bcryptjs – Password hashing
- Socket.IO – Real-time updates
- dotenv – Environment variable management
- cors – Secure cross-origin requests



 ✨ Features
- 🔐 User authentication with JWT
- 🧑‍💻 Register and login functionality
- 🍴 Restaurant data API
- 🛒 Order placement and tracking
- 🔒 Protected routes with middleware
- ⚡ Real-time communication with Socket.IO


📂 Project Structure
- **server.js** – Entry point
- **models/** – User, Restaurant, Order
- **controllers/** – Business logic for auth, restaurants, orders
- **routes/** – API endpoints
- **middleware/** – Auth middleware for JWT protection



 ⚙️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/samatha-93/food-order-backend.git
   cd food-order-backend
