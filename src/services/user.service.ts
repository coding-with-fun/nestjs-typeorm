import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'All users listed!';
  }

  getUserById(id: number): string {
    return `Hello user ${id}!`;
  }
}
