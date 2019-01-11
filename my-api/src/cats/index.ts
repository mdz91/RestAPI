import m, { Vnode } from 'mithril';
import 'src/scss/main.scss';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'src/scss/sidebar.scss';

import {MainWindow} from 'MainWindow';

m.mount(document.body, MainWindow);

$(document).ready( () => {
    $('#sidebar-collapse').on('click',  () => {
            $('.sidebar').toggleClass('active');
        });
    });

window.addEventListener('resize', () => {
       if (window.innerHeight < window.innerWidth){
           $('.sidebar').toggleClass('active');
       }
});