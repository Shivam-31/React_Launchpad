import express from 'express';
import { register, login, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes (bina token ke)
router.post('/register', register);      // POST /api/auth/register
router.post('/login', login);            // POST /api/auth/login

// Protected route (token chahiye)
router.get('/profile', protect, getProfile); // GET /api/auth/profile

export default router;