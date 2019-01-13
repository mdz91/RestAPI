import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsController} from './cats/cats.controller';
import { CatsService } from 'cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from 'cats/cat-module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
