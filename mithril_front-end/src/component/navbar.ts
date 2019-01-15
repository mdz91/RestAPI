import m from 'mithril';

export default {
    // tslint:disable-next-line:typedef
    view(vnode) {
        return m('div', { id: 'main' }, [
            m('div', { id: 'navbar' }, [
                m('div', { id: 'navbar-center' }, [

                    m('ul', { class: 'nav-options'}, [
                        // tslint:disable-next-line:max-line-length
                        m('li', m('a', { class: 'nav-create', href: '/create', oncreate : m.route.link, onupdate: m.route.link }, 'Create')),
                        // tslint:disable-next-line:max-line-length
                        m('li', m('a', { class: 'nav-list', href: '/cats/', oncreate : m.route.link, onupdate: m.route.link }, 'Cat Details')),
                    ]),
                ]),
            ]),

            m('div', { id: 'navbar' }, [
                m('span', { class: 'main-title' }, 'Jiskerfet-Cat'),
                m('div', { id: 'navbar-center' }, [

                    m('ul', { class: 'nav-options'}, [
                        // tslint:disable-next-line:max-line-length
                        m('li', m('a', { class: 'nav-create', href: '/create', oncreate : m.route.link, onupdate: m.route.link }, 'Add-cat')),
                        // tslint:disable-next-line:max-line-length
                        m('li', m('a', { class: 'nav-list', href: '/cats/', oncreate : m.route.link, onupdate: m.route.link }, 'Cat-list')),
                        // tslint:disable-next-line:max-line-length
                        m('li', m('a', { class: 'nav-delete', href: '/delete', oncreate : m.route.link, onupdate: m.route.link }, 'Delete-cat')),
                    ]),
                ]),
            ]),
            m('div', { id: 'content' }, vnode.children),
        ]);
    },
} as m.Component;