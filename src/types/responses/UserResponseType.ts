import User from 'src/models/User.model';

export type getAllUsersResponseType = Promise<{
  data: User[];
  meta: {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}>;

export type getUserByIdResponseType = Promise<User>;

export type addUseResponseType = Promise<User>;
