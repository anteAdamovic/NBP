import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExampleService {
    static examplesPath: string = './assets/config/examples.json';

    constructor(private http: Http) {}

    public getExamplesForSidebar(): Observable<any> {
        return this.http.get(ExampleService.examplesPath)
            .map((response: any) => JSON.parse(response._body))
            .map((response: any) => {
                let sidebarData: any = [];

                Object.getOwnPropertyNames(response).forEach(
                    (property: string) => {
                        sidebarData.push({
                            title: response[property].title,
                            id: response[property].id
                        });
                    }
                );
                return sidebarData;
            });
    }

    public getFirst(): Observable<any> {
        return this.http.get(ExampleService.examplesPath)
            .map((response: any) => JSON.parse(response._body))
            .map((response: any) => {
                return response[Object.getOwnPropertyNames(response)[0]];
            });
    }

    public getExamples(id: string): Observable<any> {
        return this.http.get(ExampleService.examplesPath)
            .map((response: any) => JSON.parse(response._body))
            .map((response: any) => response[id]);
    }
}