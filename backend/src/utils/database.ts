import fs from 'fs';
import path from 'path';
import { UserDatabase } from '../models/User';

const databasePath = path.join(__dirname, '../../database.json');

export const readDatabase = (): UserDatabase => {
  const data = fs.readFileSync(databasePath, 'utf-8');
  return JSON.parse(data);
};

export const writeDatabase = (data: UserDatabase) => {
  fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
};