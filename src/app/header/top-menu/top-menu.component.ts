import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
  mainMenuItems : string[] = ['Home','products','Sale', 'New Arrival' , 'Contact','Services'];
}
