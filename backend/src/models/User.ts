export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserDatabase {
  users: User[];
}