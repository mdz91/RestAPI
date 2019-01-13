import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Injectable()
export class CatsService {

constructor(
    @InjectRepository(Cat)
    private readonly cats: Repository<Cat>) { }

    async create(creatCatDto: CreateCatDto): Promise<CreateCatDto> {
     return await this.cats.save(creatCatDto);
    }

    async findAll(): Promise<Cat[]>{
        return await this.cats.find();
    }

   async update(id: string, updateCatDto: UpdateCatDto): Promise<UpdateResult> {
        return await this.cats.update(id, updateCatDto);
    }

  async remove(id: string): Promise<DeleteResult> {
      return await this.cats.delete(id);
  }
}