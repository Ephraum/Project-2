import User from '../models/user.js';
import bcrypt from 'bcrypt'; 
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export { register, login };