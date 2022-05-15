export type getAllUsersRequestType = null;

export type getUserByIdRequestType = {
  id: number;
};

export type addUserBodyType = {
  id: number;
  name: string;
  age: number;
};
