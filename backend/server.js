import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';  

// Config
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ---------- ROUTES ----------
app.get('/', (req, res) => {
  res.send('DevCollab API is running! 🚀');
});

// Auth routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes); 

// ---------- MONGODB CONNECTION ----------
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('❌ MongoDB Connection Error:', err.message);
  });