import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleService } from '../../services/example/example.service';

@Component({
    selector: 'examples',
    templateUrl: 'examples.component.html',
    styleUrls: ['examples.component.css']
})
export class Examples implements OnInit {
    private examplesData: any;

    constructor(private activatedRoute: ActivatedRoute, private exampleService: ExampleService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                if (params && params.id && params.id != 'undefined') {
                    this.exampleService.getExamples(params.id).subscribe(
                        (examplesData: any) => {
                            console.log('ExamplesData: ', examplesData);
                            this.examplesData = examplesData;
                        }
                    );
                } else {
                    console.error('Received invalid url params, please check your example configuration.');
                    console.error(params);
                }
            }
        );
    }

    public getTitle(): string {
        return this.examplesData ? this.examplesData.title : '';
    }

    public getExamples(): any[] {
        return this.examplesData ? this.examplesData.examples : [];
    }
}