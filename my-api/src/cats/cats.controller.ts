import {Controller, Get, Req, Post, HttpCode, Body, Put, Delete, Param, HttpStatus} from '@nestjs/common';
import { create } from 'domain';
import {CatsService} from './cats.service';
import {Cat} from 'Interfaces/cat.interface';
import { CreatCatDto } from './create-cat.dto';
import {  ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('cats')
@ApiBearerAuth()
@Controller('cats')
export class CatsController {
constructor(private readonly catsService: CatsService) {}
     @Post()
     @ApiResponse({ status: HttpStatus.CREATED, type: Cat})
     @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Cat})
     async create(@Body() createCatDto: CreatCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: Cat})
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Cat})
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll();
    }

    @Delete(':id')
   async remove(@Param('id') id: string) {
    return this.catsService.delete(id);
    }

}