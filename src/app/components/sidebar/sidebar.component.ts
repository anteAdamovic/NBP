import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example/example.service';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})
export class Sidebar implements OnInit {
    public examples: any[];

    constructor(private exampleService: ExampleService) {}

    ngOnInit() {
        this.exampleService.getExamplesForSidebar().subscribe(
            (response: any) => {
                console.log('Init: ', response);
                this.examples = response;
                this.setActive(0);
            }
        )
    }

    public loggedIn(): boolean {
        return localStorage.getItem('user') ? true : false;
    }

    public setActive(index: number) {
        if (this.examples) {
            for (let x = 0; x < this.examples.length; x++) {
                this.examples[x].active = false;
                if (x == index) {
                    this.examples[x].active = true;
                }
            }
        }
    }
}