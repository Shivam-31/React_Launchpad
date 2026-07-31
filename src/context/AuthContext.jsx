import { createContext, useState, useContext, useEffect } from 'react';
import { registerUser, loginUser, getProfile } from '../api/api';

// Context create karo
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Register
  const register = async (userData) => {
    try {
      setError(null);
      const response = await registerUser(userData);
      const { token, user } = response.data;
      
      // Token store karo
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      return { success: false, error: err.response?.data?.message };
    }
  };

  // ✅ Login
  const login = async (userData) => {
    try {
      setError(null);
      const response = await loginUser(userData);
      const { token, user } = response.data;
      
      // Token store karo
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return { success: false, error: err.response?.data?.message };
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // ✅ Load Profile (Jab page refresh ho)
  const loadUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      const response = await getProfile();
      setUser(response.data.user);
    } catch (err) {
      console.error('Load user error:', err);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Page load pe user load karo
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook - useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};