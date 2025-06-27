# HouseHunt-Finding-Your-Perfect-Rental-Home
**frontend files structure**
 frontend/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── images/
│   │   ├── p1.jpg
│   │   ├── p2.jpg
│   │   ├── p3.jpg
│   │   └── p4.jpg
│   └── modules/
│       ├── admin/
│       │   ├── AdminHome.jsx
│       │   ├── AllBookings.jsx
│       │   ├── AllProperty.jsx
│       │   └── AllUsers.jsx
│       ├── common/
│       │   ├── ForgotPassword.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       └── user/
│           ├── Owner/
│           │   ├── AddProperty.jsx
│           │   ├── AllBookings.jsx
│           │   ├── AllProperties.jsx
│           │   └── OwnerHome.jsx
│           └── renter/
│               ├── AllProperties.jsx
│               ├── RenterBookings.jsx
│               └── RenterHome.jsx


**backend files structure **
📁 backend/
│
├── 📁 config/
│ └── connect.js # MongoDB connection setup
│
├── 📁 controllers/ # Logic for each user role
│ ├── adminController.js
│ ├── ownerController.js
│ └── userController.js
│
├── 📁 middlewares/
│ └── authMiddleware.js # Authentication logic
│
├── 📁 routes/ # API route endpoints
│ ├── adminRoutes.js
│ ├── ownerRoutes.js
│ └── userRoutes.js
│
├── 📁 schemas/ # Mongoose models
│ ├── bookingModel.js
│ ├── propertyModel.js
│ └── userModel.js
│
├── 📁 uploads/ # File/image uploads (e.g., property images)
│
├── .env # Environment variables
├── .gitignore # Git ignore config
├── index.js # Entry point (Express setup)
├── package.json # Project metadata and dependencies
└── package-lock.json # Exact version lock of dependencies
