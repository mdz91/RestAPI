/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */

import m from 'mithril';

/**
 * @author H.J.M van der Heijden
 */

export interface IUser {
    id: string;
    name: string;
    age: number;
    breed: number;
}

// tslint:disable-next-line:typedef
const baseUrl = 'http://localhost:3000/cats/';

// tslint:disable-next-line:typedef
export const User = {

    current: {} as IUser,
    list: [] as IUser[],
    // tODO: combine to 2d array

    new: () => (User.current = {} as IUser),

    create: () => m.request<IUser>({
        method: 'POST',
        url: baseUrl,
        data: User.current,
    })
    .then((result) => {
        m.route.set('/cats/' + result.id);
    }),

    update: () => m.request<IUser>({
        method: 'PUT',
        url: baseUrl,
        data: User.current,
    })
    .then((result) => {
        m.route.set('/cats/' + result.id);
    }),

    load: (id: string) => m.request<IUser>({
        method: 'GET',
        url: baseUrl + id,
    })
    .then((result) => {
        User.current = result;
    }),

    loadList: () => m.request<IUser[]>({
        method: 'GET',
        url: baseUrl,
    })
    .then((result) => {
        User.list = result;
    }),

    delete: () => m.request<IUser>({
        method: 'DELETE',
        url: baseUrl,
        data: User.current,
    })
    .then(() => {
        m.route.set('/cats/');
    }),

};