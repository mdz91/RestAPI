import m from "mithril";
import { User } from "../models/User";

// tslint:disable-next-line:typedef
export const CatsUpdateForm = {

    // tslint:disable-next-line:typedef
    view() {
        return m("form", {
            // tslint:disable-next-line:typedef
            onsubmit(e: any) {
                e.preventDefault();
                // 'Update' requires ID to update your 'cats'
                User.update();
            },
        }, [,
            m("div", { class: "movie-form-entry" }, [
                m("movie.label", "Cat ID"),
                m("input.input[placeholder=ID]", {
                    oninput: m.withAttr("value", (value) => { User.current.id = value; }),
                    value: User.current.id,
                }),
            ]),
            m("div", { class: "movie-form-entry" }, [
            m("movie.label", "Cat Name"),
            m("input.input[placeholder=Cat Name]", {
                oninput: m.withAttr("value", (value) => { User.current.name = value; }),
                value: User.current.name,
            }),
            ]),

            m("div", { class: "movie-form-entry" }, [
                m("movie.label", "Cat Age"),
                m("input.input[placeholder=Cat Age]", {
                    oninput: m.withAttr("value", (value) => { User.current.age = Number(value); }),
                    value: User.current.age,
                }),
                ]),
            m("div", { class: "movie-form-entry" }, [
            m("movie.label", "Breed"),
            m("input.input[placeholder=Breed]", {
                oninput: m.withAttr("value", (value) => { User.current.breed = value; }),
                value: User.current.breed,
            }),
            ]),


            m("button.button[type=submit]", "Save"),
        ]);
    },
};