import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  pages: Object;
  categories: Object;

  constructor(private service : NavService) {
  }

  ngOnInit() {
    this.service.getPages().subscribe( pages => { this.pages = pages; });
    this.service.getCategories().subscribe( categories => { this.categories = categories; });
  }

}
