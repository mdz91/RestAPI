import m from 'mithril';

/**
 *
 * @author Mourad Nasser
 */

export class User  {

    public list = [];
    constructor() {
        m.request({
            method: 'GET',
            url: 'http://localhost:3000/api/cats/name',

        })
        .then((result: any) => {
            this.list = result.data;
        });
    }
}
module.exports = User;