import { Component, OnInit} from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
import { DataService } from '../data.service';
import { IWikiResponse } from 'src/interface/IWikiResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pages:[{pageid: string, title: string, wordcount: number, snippet: string}];

  constructor(private wikipediaService: WikipediaService, private dataService: DataService) {
   this.pages = [{ pageid: "", title: "", wordcount: 0, snippet: ""}];
  }

  ngOnInit(): void {
   ;
  }

  onTerm(term: string) {
    console.log("here is the emitted term: " + term);
    // we are subscribing as an observer
    this.wikipediaService.search(term).subscribe((response:IWikiResponse) => { // callback function
     console.log(response);

     this.pages.splice(0); // clear out the array - I don't understand why I have to do this
     for (const row in response.query.search) {
      let entry = response.query.search[row];
      this.pages.push({ pageid: String(entry.pageid), title: entry.title, wordcount: Number(entry.wordcount), snippet: entry.snippet });
     }

      this.dataService.setPages(this.pages);
    });
  }
  
}
