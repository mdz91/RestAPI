import {Injectable} from '@nestjs/common';
import { Cat } from 'Interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    // tslint:disable-next-line:ban-types
    findAll(): Cat[] {
        return this.cats;
    }

    // tslint:disable-next-line:ban-types
    delete(id: String): Cat[] {
        for (let i = 0; i < this.cats.length; i++) {
            if (this.cats[i].id === id) {
            delete this.cats[i];
            }
            else {
            // tslint:disable-next-line:no-console
            console.log('Cats bestaan niet');
            }
        }
        return null;
    }
}