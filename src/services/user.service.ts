import { Injectable } from '@nestjs/common';
import {
  addUserBodyType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';

@Injectable()
export class UserService {
  getUsers() {
    console.log();
    return 'Users returned.';
  }

  getUserById(params: getUserByIdRequestType): string {
    return `Hello ${params.id}!`;
  }

  createUser(body: addUserBodyType) {
    return `Hello ${body.id}, ${body.name}, ${body.age}`;
  }
}
