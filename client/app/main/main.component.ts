import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
    name: string;
    idCard: string;
    password: string;
}

@Component({
    selector: 'main',
    template: require('./main.pug'),
    styles: [require('./main.styl')],
})
export class MainComponent {

    user = {};

    static parameters = [HttpClient];
    constructor(private http: HttpClient) {
        this.http = http;

    }

    Register(){
        console.log(this.user);
        this.http.post('/api/things',this.user).subscribe(user => {
            console.log(user);
        });
    }

    
}
