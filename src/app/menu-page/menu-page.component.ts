import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Size} from '../objects/Size';
const GET_SIZES_URL : string="/api/sizes/";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  sizes : Size[];

  setSizes(newSizes: Size[]) : void {
    this.sizes = newSizes;
  }
  getSizes(): void  {
    this.http.get<Size[]>(GET_SIZES_URL).subscribe(data=>this.setSizes(data),
                                                   err=> alert(err));
  }
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getSizes();
  }

}
