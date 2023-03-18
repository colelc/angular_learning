import { Component } from '@angular/core';
import { IWikiResponse } from 'src/interface/IWikiResponse';
import { WikipediaService } from './wikipedia.service';
//import { IWikiResponse } from 'src/interface/IWikiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages:[];
  constructor(private wikipediaService: WikipediaService) {
    this.pages = [];
  }

  onTerm(term: string) {
    console.log("here is the emitted term: " + term);
    // we are subscribing as an observer
    this.wikipediaService.search(term).subscribe((response:any) => { // callback function
      this.pages = response;
    });
  }
}
