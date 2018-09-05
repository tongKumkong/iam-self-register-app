import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Thing {
    name: string;
    info?: string;
}

@Component({
    selector: 'main',
    template: require('./main.pug'),
    styles: [require('./main.styl')],
})
export class MainComponent implements OnInit {

    awesomeThings: Thing[] = [];


    static parameters = [HttpClient];
    constructor(private http: HttpClient) {
        this.http = http;

    }

    ngOnInit() {
    }

    
}
