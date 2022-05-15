import { Injectable } from '@nestjs/common';
import {
  addUserBodyType,
  getAllUsersRequestType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';

@Injectable()
export class UserService {
  getUsers(params: getAllUsersRequestType) {
    console.log(params);
    return 'Users returned.';
  }

  getUserById(params: getUserByIdRequestType): string {
    return `Hello ${params.id}!`;
  }

  createUser(body: addUserBodyType) {
    return `Hello ${body.id}, ${body.name}, ${body.age}`;
  }
}
