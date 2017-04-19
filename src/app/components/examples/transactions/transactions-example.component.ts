import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';

@Component({
    selector: 'transactions-example',
    templateUrl: 'transactions-example.component.html',
    styleUrls: ['transactions-example.component.css']
})
export class TransactionsExample implements OnInit {

    constructor(private databaseService: DatabaseService) { }

    ngOnInit() {
        this.databaseService.query('SELECT * FROM `studenti`').subscribe(
            (response: any) => {
                let data = response.data;
                console.log(JSON.parse(data));
                for(let x = 0; x < data.length; x++) {
                    data[x] = JSON.parse(data[x]);
                }
                console.log(data);
            }
        );
    }
}