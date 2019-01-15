import {Controller, Get, Req, Post, HttpCode, Body, Put, Delete, Param, HttpStatus, UsePipes} from '@nestjs/common';
import { create } from 'domain';
import {CatsService} from './cats.service';
import {Cat} from 'Interfaces/cat.interface';
import { CreateCatDto } from './create-cat.dto';
import {  ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { DeleteCatDto } from './delete-cat.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateCatDto } from './update-cat.dto';

@ApiUseTags('cats')
@ApiBearerAuth()
@Controller('cats')
export class CatsController {
constructor(private readonly catsService: CatsService) {}
     @Post()
     @ApiResponse({ status: HttpStatus.CREATED, type: Cat})
     @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Cat})
     async create(@Body() request: CreateCatDto): Promise<CreateCatDto> {
       return await this.catsService.create(request);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: Cat})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Cat})
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll();
    }

    @Put()
    async update(@Body() request: UpdateCatDto): Promise<UpdateResult> {
        return await this.catsService.update(request.id, request);
    }

    @Delete()
   async deleteCat(@Body() request: DeleteCatDto): Promise<DeleteResult> {
    return await this.catsService.remove(request.id);
    }

}