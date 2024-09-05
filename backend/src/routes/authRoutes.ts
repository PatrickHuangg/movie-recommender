import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readDatabase, writeDatabase } from '../utils/database';
import { generateToken } from '../utils/jwt';
import { User } from '../models/User';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Register
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const db = readDatabase();

  // Check if the user already exists
  if (db.users.find((user: User) => user.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user
  const newUser: User = { username, email, password: hashedPassword };
  db.users.push(newUser);
  writeDatabase(db);

  const token = generateToken(email);
  res.status(201).json({ token });
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const db = readDatabase();

  const user = db.users.find((user: User) => user.email === email);
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = generateToken(email);
  res.json({ token });
});

// Protected Route Example
router.get('/dashboard', authMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the dashboard' });
});

export default router;