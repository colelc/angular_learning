import { Component, OnInit, Input } from '@angular/core';
import { IWikiResponse } from 'src/interface/IWikiResponse';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() pages = [{ns: "", title: "", pageid: "", size: "", wordcount: "", snippet: "", timestamp: ""}];

  constructor() {}

  ngOnInit() {}
}
