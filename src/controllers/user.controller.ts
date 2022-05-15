import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user.service';
import {
  addUserBodyType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';
import {
  addUseResponseType,
  getAllUsersResponseType,
  getUserByIdResponseType,
} from 'src/types/responses/UserResponseType';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users.',
  })
  @ApiResponse({
    status: 200,
    description: 'Record found.',
  })
  getUsers(): getAllUsersResponseType {
    return this.userService.getUsers();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get specific user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Record found.',
  })
  getUserById(
    @Param() params: getUserByIdRequestType,
  ): getUserByIdResponseType {
    return this.userService.getUserById(params);
  }

  @Post()
  @ApiOperation({
    summary: 'Create user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Record created.',
  })
  createUser(@Body() body: addUserBodyType): addUseResponseType {
    return this.userService.createUser(body);
  }
}
