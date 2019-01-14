/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */
import m from "mithril";

import "../scss/test.scss";
import  $ from "jquery";
import "popper.js";
import "bootstrap";

import { CatsCreateForm } from "./views/CreateCatform";
import { CatsUpdateForm } from "./views/UpdateCats";
import { CatsDeleteForm } from "./views/DeleteCat";
import NavBar from "../component/navbar";
import { CatsHome } from "./views/CatsHome";
import CatList from "./views/CatDetails";

// remove hashbang from urlprefix
m.route.prefix("");

m.route(document.body, "/", {
    "/": {
        // tslint:disable-next-line:typedef
        render() {
            return m(NavBar, m(CatsHome));
        },
    },
    "/cats/:id": {
        // tslint:disable-next-line:typedef
        render(vnode) {
            return m(NavBar, m(CatList, vnode.attrs));
        },
    },
    "/create": {
        // tslint:disable-next-line:typedef
        render() {
            return m(NavBar, m(CatsCreateForm));
        },
    },
    "/edit": {
        // tslint:disable-next-line:typedef
        render() {
            return m(NavBar, m(CatsUpdateForm));
        },
    },
    "/delete": {
        // tslint:disable-next-line:typedef
        render() {
            return m(NavBar, m(CatsDeleteForm));
        },
    },
});