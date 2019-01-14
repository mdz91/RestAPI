import m from "mithril";
import { User } from "./../ts/models/User";

// tslint:disable-next-line:typedef
export const CatList = {
    oninit: User.loadList,

    // tslint:disable-next-line:typedef
    view() {
        return m("div", { class: "cat-list" }, User.list.map((user) => {
            // tslint:disable-next-line:quotemark
            return m("div", { class: 'cat-tile' }, [
                m("div", { class: "cat-info"}, [
                    m("span", { class: "cat-info-title" }, user.id),
                    m("span", { class: "cat-info-title" }, user.name),
                    m("span", { class: "cat-info-title" }, user.age),
                    m("span", { class: "cat-info-title" }, user.breed),
                ]),
            ]);
        }));
    },
};