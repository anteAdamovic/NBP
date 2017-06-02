import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query/query.service';

@Component({
    selector: 'query',
    templateUrl: 'query.component.html',
    styleUrls: ['query.component.css']
})
export class Query implements OnInit {
    private tables: any;

    constructor(private queryService: QueryService) { }

    ngOnInit() {
        this.queryService.getTables().subscribe(
            (tables: any) => {
                this.tables = tables;
            }
        )
    }

    public query() {
        this.queryService.query('');
    }

    public getTables() {

    }

    public getTableColumns() {

    }
}