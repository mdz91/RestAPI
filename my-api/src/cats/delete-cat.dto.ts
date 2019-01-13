import {IsInt} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

/**
 * Class for deleting cats by using existing id
 */

export class DeleteCatDto {

    @ApiModelProperty()
    @IsInt()
    readonly id: string;

}