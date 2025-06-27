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
