import {IsString, IsInt} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

/**
 * Class for creating cats by using existing id
 */

export class CreateCatDto {
    @ApiModelProperty()
    @IsString()
    readonly id: string;

    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsInt()
    readonly age: number;
    @ApiModelProperty()
    @IsString()
    readonly breed: string;
}