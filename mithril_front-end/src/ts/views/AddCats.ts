import m from "mithril";
import { User } from "../models/User";

// tslint:disable-next-line:typedef
var root = document.body;




// tslint:disable-next-line:typedef
var showCat = {
    // tslint:disable-next-line:typedef
    view: function() {
        return m("a", {href: "Main"}, "Show Cats");
    }
};
export class MainWindow {
    private res : User;


    constructor () {
        this.res = new User();
    }

    // tslint:disable-next-line:typedef
    view() {
        return m("div",{class:"main-window"},
            [
                m("nav",  { class: "sidebar" },
                    [
                        m("div#sidebar-collapse-title", { class: "sidebar-header" },
                            [
                                m("h3", "Jiskerfet-UI" ),
                                m("strong", "Alice")
                            ]
                        ),
                        m("ul", { class:"list-unstyled components" },
                            m("li", { class: "list-unstyled components"}, [
                                m("a", [
                                    m("i", {class:"fas fa-briefcase"} , "home")
                                ]),
                                m(showCat, [
                                    m("i", {href:"fas fa-briefcase"} , "Show Cats in JSON")
                                ]),

                            ])
                        )
                    ]
                ),


                m("main",
                    m ("div", { class: "container-fluid"}, [
                        m("nav", { class: "navbar navbar-expand-lg navbar-light bg-light mobile-only"},[
                            m("div", { class: "container-fluid"} ,
                                m("button#sidebar-collapse", { class: "btn btn-info"}, [
                                    m("i", { class: "fas fa-align-left"}, ""),
                                    m("span", "toggle sidebar")
                                ])
                            )
                        ] ),
                        // tslint:disable-next-line:typedef
                        m(".user-list", this.res.list.map(function(user : any) {
                            return m(".user-list-item", user.name + " " + user.age + " " + user.breed);
                            })
                        )

                    ])

                ),

                m("nav",  { class: "bottombar" },
                [
                    m("div#bottombar-collapse-title", { class: "bottombar-header" },
                        [
                            m("h3", "Jiskefet-UI" ),
                            m("strong", "Hallo")
                        ]
                    ),
                    // deze bevat het tekst. In het right sidebar.
                ]
            ),

            ]
        );
    }
}
