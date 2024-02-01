import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() eventSearchBar = new EventEmitter<string>();
  input:any;

 onKeySearchBar (inputKeyup:any) {
  this.eventSearchBar.emit(inputKeyup.target.value);
 }
}
