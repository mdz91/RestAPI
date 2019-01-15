import m from 'mithril';
import { User } from './../models/User';

// tslint:disable-next-line:typedef
export const CatsHome = {
    oninit: User.loadList,
    // tslint:disable-next-line:typedef
    view() {
        return m('div', { id: 'cats'}, [
            m('span', { class: 'main-title' }, 'Cats'),
            m('div', { class: 'cat-list' }, User.list.map((user) => {
                return m('div', { class: 'cat-tile' }, [
                    m('a', { href: '/cats/' + user.id, oncreate : m.route.link, onupdate: m.route.link },
                     ),
                      m('div', { class: 'cat-info'}, [
                        m('span', { class: 'cat-info-title' }, 'Cat-Id: ' , user.id),
                        m('span', { class: 'cat-info-title' }, 'Cat-Name: ' , user.name),
                        m('span', { class: 'cat-info-title' }, 'Cat-Age: ' , user.age),
                        m('span', { class: 'cat-info-title' }, 'Breed: ' , user.breed),
                    ]),
                ]);
            })),
        ]);
    },
};