import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pages:[];
  
  constructor(private wikipediaService: WikipediaService, private dataService: DataService) {
    this.pages = [];
  }
  ngOnInit(): void {
    this.dataService.getPages().subscribe((pages: any) => {
      this.pages = pages;
    });
  }

}
