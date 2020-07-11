import { Component, OnInit, Input} from '@angular/core';
import {Size} from '../objects/Size';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  
  @Input() size: Size;
  constructor() { }

  ngOnInit(): void {
  }

}
