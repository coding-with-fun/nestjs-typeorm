import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testusers',
      synchronize: true,
      autoLoadEntities: true,
      debug: true,
      logger: 'advanced-console',
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
