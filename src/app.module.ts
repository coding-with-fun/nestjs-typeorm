import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexModule } from './modules/index.module';

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
    IndexModule,
  ],
})
export class AppModule {}
