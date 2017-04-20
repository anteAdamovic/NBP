import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';
import { ExampleService } from '../../../services/example/example.service';

@Component({
    selector: 'transactions-example',
    templateUrl: 'transactions-example.component.html',
    styleUrls: ['transactions-example.component.css']
})
export class TransactionsExample implements OnInit {
    private examples: any;
    public responseData: any[];
    public dataProperties: any[];

    constructor(private databaseService: DatabaseService, private exampleService: ExampleService) { }

    ngOnInit() {
        // this.databaseService.query('SELECT * FROM `studenti`').subscribe(
        //     (response: any) => {
        //         this.responseData = response;
        //         this.dataProperties = Object.getOwnPropertyNames(response[0]);
        //     }
        // );
        this.exampleService.getTransactionExamples().subscribe(
            (exampleData: any) => this.examples = JSON.parse(exampleData._body)
        );
    }

    public getFirstExample(): any {
        return this.examples ? this.examples.firstExample : null;
    }

    public execute(steps: any[]): void {
        for(let x = 0; x < steps.length; x++) {
            setTimeout(() => {
                this.databaseService.query(steps[x].query).subscribe(
                    (response: any) => {
                        console.log(response);
                        let element = document.getElementById('first-example-result');
                        element.innerHTML = 'Query returned ' + response.length + ' rows.';
                    }
                );
            }, x * 500);
        }
        // this.transactionsExampleService.getFirstExample().subscribe(
        //     (exampleData: any) => console.log(JSON.parse(exampleData._body)['first-example'])
        // );
        // return;
        // console.log(codeElement);
        // let queryString = document.querySelector('#' + codeElement).innerHTML;
        // setTimeout(() => {
        //     this.databaseService.query("CREATE TABLE studentiImePrezime (ime TEXT, prezime TEXT)").subscribe(
        //         (response) => console.log('Response ', response));
        // }, 0);
        // setTimeout(() => {
        //     this.databaseService.query("INSERT INTO studentiImePrezime SELECT ime, prezime FROM studenti WHERE idSmjer=17").subscribe(
        //         (response) => console.log('Response ', response));
        // }, 200);
    }
}