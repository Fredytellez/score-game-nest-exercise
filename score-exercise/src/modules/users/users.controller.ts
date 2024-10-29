import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService, User } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { RolesGuard } from 'src/guards/role.guards';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('test')
  getTest(): string {
    return 'Users endpoint is working!';
  }

  @Post()
  @Roles('admin')
  createUser(@Body() userDto: CreateUserDto): User {
    return this.usersService.createUser(userDto);
  }

  @Get()
  @Roles('admin')
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @Roles('admin')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  @Roles('admin')
  updateUserById(
    @Param('id') id: string,
    @Body() updateData: UpdateUserDto,
  ): User {
    return this.usersService.updateUserById(id, updateData);
  }

  @Delete(':id')
  @Roles('admin')
  deleteUserById(@Param('id') id: string): void {
    this.usersService.deleteUserById(id);
  }
}
