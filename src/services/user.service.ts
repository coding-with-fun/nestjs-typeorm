import { Injectable } from '@nestjs/common';
import {
  addUserBodyType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/models/User.model';
import { getAllUsersResponseType } from 'src/types/responses/UserResponseType';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): getAllUsersResponseType {
    return await this.userRepository.find();
  }

  getUserById(params: getUserByIdRequestType): string {
    return `Hello ${params.id}!`;
  }

  createUser(body: addUserBodyType) {
    return `Hello ${body.id}, ${body.name}, ${body.age}`;
  }
}
