import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {
    static databaseUrl: string = 'http://nbpod.co.nf/php';
    static queryUrl: string = '/query.php';

    constructor(private http: Http) {}

    public query(queryString: string): Observable<any> {
        const body = JSON.stringify({ query: queryString });
        return this.http.post(DatabaseService.databaseUrl + DatabaseService.queryUrl, body)
            .map((response: any) => this.parseResults(JSON.parse(response._body)));
    }

    private parseResults(data: any): any {
        for(let x = 0; x < data.length; x++) {
            data[x] = JSON.parse(data[x]);
        }
        return data;
    }
}