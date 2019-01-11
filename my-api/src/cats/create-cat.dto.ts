import { ApiModelProperty } from '@nestjs/swagger';

export class CreatCatDto {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly age: number;
    @ApiModelProperty()
    readonly breed: string;
}