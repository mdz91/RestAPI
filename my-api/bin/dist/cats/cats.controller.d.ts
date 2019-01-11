import { CatsService } from './cats.service';
import { Cat } from 'Interfaces/cat.interface';
import { CreatCatDto } from './create-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreatCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
    remove(name: string): Cat[];
}
