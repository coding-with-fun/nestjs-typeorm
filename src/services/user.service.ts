import { Injectable } from '@nestjs/common';
import {
  addUserBodyType,
  getUserByIdRequestType,
} from 'src/types/requests/UserRequestType';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/models/User.model';
import {
  addUseResponseType,
  getAllUsersResponseType,
  getUserByIdResponseType,
} from 'src/types/responses/UserResponseType';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): getAllUsersResponseType {
    return await this.userRepository.find();
  }

  async getUserById(params: getUserByIdRequestType): getUserByIdResponseType {
    return await this.userRepository.findOne({
      where: {
        id: params.id,
      },
    });
  }

  async createUser(body: addUserBodyType): addUseResponseType {
    const newUser = new User();
    newUser.name = body.name;
    newUser.age = body.age;

    await this.userRepository.save(newUser);

    return newUser;
  }
}
