import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
  let token;

  // 1. Headers se token lo
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 2. Check karo token hai ya nahi
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized, no token'
    });
  }

  try {
    // 3. Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 4. User ID request mein add karo
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    
    next(); // Agle function pe jaao

  } catch (error) {
    console.error('Auth Error:', error);
    return res.status(401).json({
      success: false,
      message: 'Not authorized, token failed'
    });
  }
};