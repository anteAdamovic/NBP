import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {
    static databaseUrl: string = 'http://nbpod.co.nf/php/';

    constructor(private http: Http) {}

    public query(q: string): Observable<any> {
        const body = JSON.stringify({ query: q });
        return this.http.post(DatabaseService.databaseUrl + 'query.php', body)
            .map((response: any) => {
                let array = JSON.parse(response._body);
                for(let x = 0; x < array.length; x++) {
                    array[x] = JSON.parse(array[x]);
                }
                console.log(array);
            });
    }
}