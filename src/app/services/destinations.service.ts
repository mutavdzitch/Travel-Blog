import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DestinationsService {

    servicePath = "http://localhost:4200/assets/json/";

    constructor(private service : HttpClient){
    }

    getDestinations(){
        var destinations = this.service.get(this.servicePath + "destinations.json");
        return destinations;
    }

    getComments() {
        var comments = this.service.get(this.servicePath + "comments.json");
        return comments;
    }

    saveComment(data) {
        this.service.post(this.servicePath +'comments.json', data).subscribe(responseData => {});
    }
  
}