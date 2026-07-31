import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  // Skills - array of strings (optional)
  skills: {
    type: [String],
    default: []
  },
  // GitHub username (optional)
  github: {
    type: String,
    default: ''
  },
  // Bio (optional)
  bio: {
    type: String,
    default: ''
  },
  // Avatar URL (optional)
  avatar: {
    type: String,
    default: ''
  },
  
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true // createdAt aur updatedAt automatically add karega
});


const User = mongoose.model('User', userSchema);

export default User;