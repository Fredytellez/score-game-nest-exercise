export class CreateUserDto {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export class UpdateUserDto {
  username?: string;
  password?: string;
  role?: 'user' | 'admin';
}
