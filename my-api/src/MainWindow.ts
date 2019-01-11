import m from 'mithril';
import { User } from 'User';

export class MainWindow {

    view() {
        return m('div', {class: 'main-window'},
            [
                m('nav',  { class: 'sidebar' },
                    [
                        m('div#sidebar-collapse-title', { class: 'sidebar-header' },
                            [
                                m('h3', 'Jiskerfet Bookkeeping' ),
                                m('strong', 'Alice'),
                            ],
                        ),
                        m('ul', { class: 'list-unstyled components' },
                            m('li', { class: 'list-unstyled components'}, [
                                m('a', [
                                    m('i', {class: 'fas fa-briefcase'} , 'home'),
                                ]),

                            ]),
                        ),
                    ],
                ),
                m('main',
                    m ('div', { class: 'container-fluid'}, [
                        m('nav', { class: 'navbar navbar-expand-lg navbar-light bg-light mobile-only'}, [
                            m('div', { class: 'container-fluid'} ,
                                m('button#sidebar-collapse', { class: 'btn btn-info'}, [
                                    m('i', { class: 'fas fa-align-left'}, ''),
                                    m('span', 'toggle sidebar'),
                                ]),
                            ),
                        ] ),
                    ]),

                ),

            ],
        );
    }
}