import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  //@Input() pages = [{ns: "", title: "", pageid: "", size: "", wordcount: "", snippet: "", timestamp: ""}];
  @Input() pages = [{pageid: "", title: "",  wordcount: "", snippet: ""}];

  constructor() {}

  ngOnInit() {
    ;
  }
}
