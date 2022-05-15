import User from 'src/models/User.model';

export type getAllUsersResponseType = Promise<User[]>;

export type getUserByIdResponseType = Promise<User>;

export type addUseResponseType = Promise<string>;
