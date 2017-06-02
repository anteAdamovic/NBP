import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QueryService {
    static tablesPath: string = './assets/config/tables.json';

    constructor(private http: Http) { }

    public getTables(): Observable<any> {
        return this.http.get(QueryService.tablesPath);
    }

    public query(queryString: string): Observable<any> {
        return Observable.create({});
    }
}