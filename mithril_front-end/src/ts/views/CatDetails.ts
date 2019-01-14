import m from "mithril";
import { User } from "../models/User";


// tslint:disable-next-line:interface-name
export interface Attrs {
    id: string;
}

export default {
    // tslint:disable-next-line:typedef
    oninit(vnode) {
        User.load(String(vnode.attrs.id));
    },
    // tslint:disable-next-line:typedef
    view() {
        return m("div", { class: "cat-detail" }, [
            m("section", [
                m("div", { class: "cat-detail-intro" }, [
                    m("div", { class: "cat-detail-score" }, "Cat-Id: ", User.current.id),
                     m("div", { class: "cat-detail-score" }, "Cat-Name: ",User.current.name),
                    m("div", { class: "cat-detail-score" }, "Cat-Age: ",User.current.age),
                    m("div", { class: "cat-detail-description" }, "Cat-Breed: ",User.current.breed),
                ]),
            ]),
            m("div", { class: "cat-detail-button" }, [
                m("button", { class: "button", onclick: () => m.route.set("/edit") }, "Wijzig"),
                m("button", { class: "button", onclick: () => m.route.set("/delete")}, "Verwijder"),
            ]),
        ]);
    },
} as m.Component<Attrs>;