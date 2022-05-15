import UserModel from 'src/models/User.model';

export type getAllUsersResponseType = Promise<UserModel[]>;

export type getUserByIdResponseType = string;

export type addUseResponseType = string;
