import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = '';

  @Output()
  searchTextChanged:EventEmitter<string> =new  EventEmitter<string>()

  // Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the differnet token from the queried elements
  //2. static: Use it to query static elements
  //    true is when the view is initialized (before hte first change detection)
  //    False if you wnat it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl:ElementRef;

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }

  updateSearchText(){
    // this.searchText = event.target.value
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText)
  }


}
