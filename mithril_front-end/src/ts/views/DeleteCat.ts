import m from 'mithril';
import { User } from '../models/User';

// tslint:disable-next-line:typedef
export const CatsDeleteForm = {

    // tslint:disable-next-line:typedef
    view() {
        return m('form', {
            // tslint:disable-next-line:typedef
            onsubmit(e: any) {
                e.preventDefault();
                User.delete();
            },
        }, [,
            m('div', { class: 'cat-form-entry' }, [
                m('cat.label', 'Cat ID'),
                m('input.input[placeholder=ID]', {
                    oninput: m.withAttr('value', (value) => { User.current.id = value; }),
                    value: User.current.id,
                }),
            ]),
            m('button.button[type=submit]', 'Delete'),
        ]);
    },
};