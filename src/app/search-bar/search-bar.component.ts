import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<string>(); // child back up to parent communication
  term:string;

  constructor() {
    this.term = "";
  }

  onInput = (event:Event) => {
    if ((event.target as HTMLInputElement)?.value) {
      this.term = (event.target as HTMLInputElement).value;
    }
  }

  onFormSubmit = (event:Event) => {
    event.preventDefault();
    console.log("form submit: term = " + this.term);
    this.submitEvent.emit(this.term);
  }

  ngOnInit() {}
}
