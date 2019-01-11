
import {ApiModelProperty} from '@nestjs/swagger';

export class Cat {
    @ApiModelProperty()
    readonly id: string;
    @ApiModelProperty(
    )
    readonly name: string;

    @ApiModelProperty()
    readonly age: number;
    @ApiModelProperty()
    readonly breed: string;
}