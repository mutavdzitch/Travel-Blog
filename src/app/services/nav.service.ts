import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavService {

    servicePath = "http://localhost:4200/assets/json/";

    constructor(private service : HttpClient){
    }

    getPages(){
        var pages = this.service.get(this.servicePath + "pages.json");
        return pages;
    }

    getCategories(){
        var categories = this.service.get(this.servicePath + "categories.json");
        return categories;
    }
}