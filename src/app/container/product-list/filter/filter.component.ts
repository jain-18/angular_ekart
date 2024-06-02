import { Component, Input , Output ,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all : number = 0;

  @Input()
  inStock : number = 0;

  @Input()
  outOfstock : number = 0;

  @Output()
  selectFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton : string = 'all';

  onSelectedFilterRadioButtonChanged(){
    // console.log("selected filter radio button changed raise ")
    this.selectFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
