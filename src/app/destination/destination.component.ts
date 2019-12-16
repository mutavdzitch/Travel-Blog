import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  // Id of this post
  public id;

  //Get Destination
  destinations;
  public destination: any;
  loaded = false;
  param;

  //Get Comments
  comments: Object;
  public commentsOfThisId = [];
  commentsBool = false;

  //Add comment Form
  addCommentForm: FormGroup;
  public lastCommentId;

  //Get Categories
  categories: Object;

  constructor(private route: ActivatedRoute, private service : DestinationsService, private router : Router, private navservice : NavService) { 
    this.route.params.subscribe(params => {this.param = params['id'];});
    //console.log(this.param);
  }

  ngOnInit() {

    //Get Id
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.id = id;
      this.router.navigate(['/destination/' + this.id]);
    });

    //Get Destination
    this.service.getDestinations().subscribe(
      data => {
        this.destinations = data;
        //console.log(data); //svi

        var count = Object.keys(this.destinations).length;
        //console.log(count);

        for(var i = 0; i < count; i++){
          if(this.param == this.destinations[i].id){
            this.destination = this.destinations[i];
            this.loaded = true;
          }
        }
      },
      error=>{
        console.log(error);
      }
    );

    //Get Categories
    this.navservice.getCategories().subscribe( categories => { this.categories = categories; });

    //Get Comments
    this.service.getComments().subscribe(
      data => {
        this.comments = data;
        //console.log(data); //svi

        var count = Object.keys(this.comments).length;
        //console.log(count);
        
        this.lastCommentId = this.comments[count - 1].id;        
        //console.log(this.lastCommentId + " zadnji id"); //zadnji id

        for(var i = 0; i < count; i++){
          if(this.param == this.comments[i].postId){
            this.commentsOfThisId.push(this.comments[i]);
            this.commentsBool = true;
          }
        }
        
      },
      error=>{
        console.log(error);
      }
    );

    //Add Comment
    let date = new Date();
    let currentDate = date.toISOString().slice(0, 10);

    let idComment = parseInt(this.lastCommentId) + 1;

    this.addCommentForm = new FormGroup({
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      'name' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'created' : new FormControl(currentDate),
      'postId' : new FormControl(this.id),
      'id' : new FormControl(idComment)
    });  
  }
  

  onSubmit() {
    if (this.addCommentForm.valid) {
      //this.service.saveComment(this.addCommentForm.value);
      //this.router.navigate(['/destination/' + this.id], {state: { added: true, subscribed: false }});
      //location.reload(); 
      console.log(
        "Message: " + this.addCommentForm.value.message + "\n" + 
        "Name: " + this.addCommentForm.value.name + "\n" +
        "Email :" + this.addCommentForm.value.email + "\n" +
        "Created :" + this.addCommentForm.value.created + "\n" +
        "Post: " + this.addCommentForm.value.postId + "\n" + 
        "Id: " + this.addCommentForm.value.id
      );
    }
  }

}
