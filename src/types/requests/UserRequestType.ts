import { IsNotEmpty, IsNumber } from 'class-validator';
import { paginationRequestType } from './PaginationRequestType';

export class getUsersRequestType extends paginationRequestType {}

export class getUserByIdRequestType {
  @IsNotEmpty({
    message: 'ID is required.',
    always: true,
  })
  id: number;
}

export class addUserBodyType {
  @IsNotEmpty({
    message: 'Name is required.',
    always: true,
  })
  name: string;

  @IsNotEmpty({
    message: 'Age is required.',
    always: true,
  })
  @IsNumber()
  age: number;
}
