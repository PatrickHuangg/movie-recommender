// import express, { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import fs from 'fs';
// import path from 'path';
// import jwt from 'jsonwebtoken';

// const router = express.Router();
// const userDbPath = path.join(__dirname, '../data/users.json');
// const secretKey = 'your-secret-key'; // Use a more secure key in production

// // Utility to read/write to the JSON file
// const readUsersFromFile = () => {
//     const data = fs.readFileSync(userDbPath, 'utf-8');
//     return JSON.parse(data);
// };

// const writeUsersToFile = (users: any) => {
//     fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2));
// };

// // Registration route
// router.post('/register', (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const users = readUsersFromFile();

//     const userExists = users.find((user: any) => user.username === username);
//     if (userExists) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10);
//     users.push({ username, password: hashedPassword });
//     writeUsersToFile(users);

//     res.status(201).json({ message: 'User registered successfully' });
// });

// // Login route
// router.post('/login', (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const users = readUsersFromFile();

//     const user = users.find((user: any) => user.username === username);
//     if (!user || !bcrypt.compareSync(password, user.password)) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

//     res.status(200).json({ message: 'Logged in successfully', token });
// });

// // Middleware to verify JWT
// const authenticateJWT = (req: Request, res: Response, next: Function) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, secretKey, (err: any, user: any) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

// // Protected route example
// router.get('/protected', authenticateJWT, (req: Request, res: Response) => {
//     res.status(200).json({ message: 'You have accessed a protected route', user: req.user });
// });

// // Logout route (JWT doesn't require server-side logout)
// router.post('/logout', (req: Request, res: Response) => {
//     // In a JWT-based system, logout can be handled on the client side by deleting the token.
//     res.status(200).json({ message: 'Logged out successfully' });
// });

// export default router;