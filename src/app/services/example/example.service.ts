import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExampleService {
    public TRANSACTION_EXAMPLES: string = './assets/config/transaction-examples.json';

    constructor(private http: Http) {}

    public getTransactionExamples(): Observable<any> {
        return this.http.get(this.TRANSACTION_EXAMPLES);
    }
}