import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

export interface User {
  id: string;
  username: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(userDto: CreateUserDto): User {
    const user: User = {
      id: uuidv4(),
      ...userDto,
    };
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  updateUserById(id: string, updateData: UpdateUserDto): User {
    const user = this.getUserById(id);
    if (user) {
      Object.assign(user, updateData);
    }
    return user;
  }

  deleteUserById(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  // Método adicional para autenticar usuarios y obtener su rol
  authenticateUser(username: string, password: string): User | null {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    return user || null;
  }
}
