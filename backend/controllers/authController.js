import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --------------------- REGISTER API ---------------------
export const register = async (req, res) => {
  try {
    // 1. Request se data lo
    const { name, email, password, skills, github, bio } = req.body;

    // 2. Check karo email already exist toh nahi karta?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'User already exists with this email' 
      });
    }

    // 3. Password ko encrypt (hash) karo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Naya user create karo
    const user = new User({
      name,
      email,
      password: hashedPassword,
      skills: skills || [],
      github: github || '',
      bio: bio || ''
    });

    // 5. Database mein save karo
    await user.save();

    // 6. JWT Token generate karo
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 7. Response bhejo (password mat bhejna)
    res.status(201).json({
      success: true,
      message: 'User registered successfully!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
        github: user.github,
        bio: user.bio
      }
    });

  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// --------------------- LOGIN API ---------------------
export const login = async (req, res) => {
  try {
    // 1. Request se email aur password lo
    const { email, password } = req.body;

    // 2. Check karo user exist karta hai?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 3. Password match karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 4. JWT Token generate karo
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 5. Response bhejo
    res.status(200).json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
        github: user.github,
        bio: user.bio
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// --------------------- GET USER PROFILE ---------------------
export const getProfile = async (req, res) => {
  try {
    // req.userId auth middleware se aayega (baad mein banayenge)
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Profile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};