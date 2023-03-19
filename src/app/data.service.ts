import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    private pages = new Subject<[{pageid: string, title: string, wordcount: number, snippet: string}]>;

    constructor() { }

    public getPages() : Observable<[{pageid: string, title: string, wordcount: number, snippet: string}]> {
        return this.pages.asObservable();
    }

    public setPages(pages: [{pageid: string, title: string, wordcount: number, snippet: string}]) {
        return this.pages.next(pages);
    }
}
