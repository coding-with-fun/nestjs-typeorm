import { Injectable } from '@nestjs/common';
import {
  addUserBodyType,
  getUserByIdRequestType,
  getUsersRequestType,
} from 'src/types/requests/UserRequestType';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/models/User.model';
import {
  addUseResponseType,
  getAllUsersResponseType,
  getUserByIdResponseType,
} from 'src/types/responses/UserResponseType';
import { pagination } from './pagination.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(params: getUsersRequestType): getAllUsersResponseType {
    const page = params.page || 1;
    const limit = params.limit || 10;

    // console.log(params, page, limit);

    const [data, count] = await this.userRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return pagination(data, count, page, limit);
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
