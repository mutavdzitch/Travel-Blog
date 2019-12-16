import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destinations: Object;

  constructor(private service : DestinationsService) {

  }

  ngOnInit() {
    this.service.getDestinations().subscribe( destinations => { this.destinations = destinations; });
  }
}
