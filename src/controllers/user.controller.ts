import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user.service';
import {
  addUserBodyType,
  getUserByIdRequestType,
  getUsersRequestType,
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
  getUsers(@Query() query: getUsersRequestType): getAllUsersResponseType {
    return this.userService.getUsers(query);
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
