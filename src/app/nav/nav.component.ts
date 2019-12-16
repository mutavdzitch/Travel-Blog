import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //variables
  pages: Object;
  categories: Object;

  constructor(private service : NavService ) {
    
  }

  ngOnInit() {
    this.service.getPages().subscribe( pages => { this.pages = pages; });
  }

}
