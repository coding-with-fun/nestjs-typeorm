import { Module } from '@nestjs/common';
import { UserModule } from './users.module';

@Module({
  imports: [UserModule],
})
export class IndexModule {}
