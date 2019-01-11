import { Cat } from 'Interfaces/cat.interface';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
    delete(name: String): Cat[];
}
