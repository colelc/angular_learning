import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { IWikiResponse } from 'src/interface/IWikiResponse';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  /*
  I hit the CORS issue.  Had to do 2 things to make this work.
    (1).  Use a proxy server (I used Spring Boot).  https://www.stackhawk.com/blog/angular-cors-guide-examples-and-how-to-enable-it/
    (2).  Made a new Chrome desktop shortcut in which I disabled CORS check.
    yeesh.
  */

    /*
    LATER.  I don't have to use the Spring Boot proxy server.  Just the new Chrome desktop shortcut is sufficient.
    But, it still has been cool to figure out how to set up a proxy server.
    */
    // url = "http://localhost:8080/wiki"; // (SpringBoot serving on port 8080)
    
  url="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
  //url="https://en.wikipedia.org/w/api.php";

 // https://en.wikipedia.org?curid=<pageid>
  constructor(private httpClient: HttpClient) { }

  public search(term: string) {
      // creating an observable by making a network request 
     return this.httpClient.get<IWikiResponse>(this.url, {
      params: {
        action: "query",
        format: "json",
        list: "search",
        utf8: "1",
        srlimit: "100",
        srsearch: term
      }
    });
    /*
    .pipe(
     map(value => value.query.search),
     map(value => {
      console.log(value);
      return value;
     })
    );
    */
  }
}
