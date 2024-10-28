import User from '../models/user.js';
import bcrypt from 'bcrypt'; // Assuming bcrypt is used for password comparison

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Add additional logic here if needed
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the login function if needed
export { login };