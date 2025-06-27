const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const bodyParser = require('body-parser');
// const authMiddleware = require('./middlewares/authMiddleware');
// const adminRoutes = require('./routes/adminRoutes');
// const ownerRoutes = require('./routes/ownerRoutes');
// const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 0; // Default to 5000 if not in .env

app.use(cors());
app.use(bodyParser.json());




// Suppress Mongoose strictQuery deprecation warning


// mongoose.set('strictQuery', false);

// MongoDB Connection with error handling


mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));


// Sample Schema
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Item = mongoose.model("Item", ItemSchema);

// API Routes
// Create (POST)
app.post("/api/items", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error creating item", error });
  }
});

// Read (GET all)
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
});

// Uncomment and adjust these lines once the middleware and routes are ready
/*
app.use('/api/admin', authMiddleware, adminRoutes);
app.use('/api/owner', authMiddleware, ownerRoutes);
app.use('/api/user', authMiddleware, userRoutes);
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});