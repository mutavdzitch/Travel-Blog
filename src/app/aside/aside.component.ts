import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  destinations: Object;

  constructor(private service : DestinationsService) {

  }

  ngOnInit() {
    this.service.getDestinations().subscribe( destinations => { this.destinations = destinations; });
  }

}
