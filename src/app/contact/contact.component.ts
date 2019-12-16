import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      'subject' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'name' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'email' : new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(
        "Your message was successfully sent.\n\n" +
        "Subject:" + this.contactForm.value.subject + "\n" + 
        "Message:" + this.contactForm.value.message + "\n" + 
        "Name:" + this.contactForm.value.name + "\n" +
        "Email:" + this.contactForm.value.email
      );
    }
  }
  
}
