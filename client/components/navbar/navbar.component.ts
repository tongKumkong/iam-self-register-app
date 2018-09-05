import { Component } from '@angular/core';


@Component({
    selector: 'navbar',
    template: require('./navbar.pug'),
})
export class NavbarComponent {
    isCollapsed = true;
    menu = [{
        title: 'Home',
        'link': '/home',
    }];
    Router;
}
