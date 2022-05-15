import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { getUserByIdType } from '../types/Params';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param() params: getUserByIdType): string {
    return this.userService.getUserById(params.id);
  }
}
