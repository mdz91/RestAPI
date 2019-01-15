import m from 'mithril';
import { User } from '../models/User';

// tslint:disable-next-line:typedef
export const CatsCreateForm = {

    // tslint:disable-next-line:typedef
    oninit() {
        User.new();
    },
    // tslint:disable-next-line:typedef
    view() {
        return m('form', {
            // tslint:disable-next-line:typedef
            onsubmit(e: any) {
                e.preventDefault();
                User.create();
            },
        }, [

            m('div', { class: 'cat-form-entry' }, [
            m('label.label', 'Cat-name:'),
            m('input.input[placeholder=Catsname]', {
                oninput: m.withAttr('value', (value) => { User.current.name = value; })}),
            ]),

            m('div', { class: 'cat-form-entry' }, [
            m('label.label', 'Age:'),
            m('input.input[placeholder=Age]', {
                oninput: m.withAttr('value', (value) => { User.current.age =  Number(value); })}),
            ]),

            m('div', { class: 'cat-form-entry' }, [
            m('label.label', 'Breed:'),
            m('input.input[placeholder=Breed]', {
                oninput: m.withAttr('value', (value) => { User.current.breed = value; })}),
            ]),

            m('button.button[type=submit]', 'Save'),
        ]);
    },
};