

var count = 0
var root = document.body


var Splash = {
view: function() {
    return m("a", {href: "#!/hello"}, "Enter!")
}

}


var Hello = {
    view: function(){
    return m("main", [
        m("h1", {class: "title"}, "My first app"),
        m("button", {onclick: function() {count++}}, count + "clicks"),
    ])
}
}

var main = {
view: function() {
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
                                m('i', {class: 'fas fa-briefcase'} , 'Hi'),
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
m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
    "/main": main,
})