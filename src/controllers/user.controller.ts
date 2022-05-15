import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import {
  addUserBodyType,
  getAllUsersRequestType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';
import {
  addUseResponseType,
  getAllUsersResponseType,
  getUserByIdResponseType,
} from 'src/types/responses/UserResponseType';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(@Param() params: getAllUsersRequestType): getAllUsersResponseType {
    return this.userService.getUsers(params);
  }

  @Get(':id')
  getUserById(
    @Param() params: getUserByIdRequestType,
  ): getUserByIdResponseType {
    return this.userService.getUserById(params);
  }

  @Post()
  createUser(@Body() body: addUserBodyType): addUseResponseType {
    return this.userService.createUser(body);
  }
}
