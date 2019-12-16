import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavService } from '../services/nav.service';
import { slide } from '../animations';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  animations: [
    slide
  ]
})
export class DestinationsComponent implements OnInit {

  public category;

  public destinations;
  public filteredDestinations = [];
  filterBool = false;
  param;

  //Get Categories
  categories: Object;

  constructor(private route: ActivatedRoute, private service : DestinationsService, private router : Router, private navservice : NavService) { 
    this.route.params.subscribe(params => {this.param = params['category'];});
    //console.log(this.param);
  }

  ngOnInit() {
    //this.service.getDestinations().subscribe( destinations => { this.destinations = destinations; });
    this.route.paramMap.subscribe((params: ParamMap) => {
      let category = params.get('category');
      this.category = category;
    });

    this.service.getDestinations().subscribe(
      data => {
        this.destinations = data;
        //console.log(data);

        var count = Object.keys(this.destinations).length;
        //console.log(count);

        for(var i = 0; i < count; i++){
          if(this.param === this.destinations[i].category){
            this.filteredDestinations.push(this.destinations[i]);
            this.filterBool = true;
          }
        }
      },
      error=>{
        console.log(error);
      }
    );

    //Get Categories
    this.navservice.getCategories().subscribe( categories => { this.categories = categories; });
  }
  

}
