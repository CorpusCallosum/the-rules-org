import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})
export class NewsletterSignupComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};
  
  //elementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
   // this.elementRef = document.getElementById("mc_embed_signup");
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
