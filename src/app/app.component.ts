import {Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
   title = 'The Rules Org';

   currentRoute:String;
   _route:ActivatedRoute;
   router:Router;

   menuItems = [
     {"title":"About", "routerLink":"/about"},
     {"title":"FAQ", "routerLink":"/faq"},
     {"title":"Get Involved", "routerLink":"/get-involved"},
     {"title":"Blog", "url":"/blog"},

   ]

   constructor(route:ActivatedRoute, router:Router) {
     console.log('route :'+route);
     console.log('router :'+router);
     console.log('url :'+router.url)


     this._route = route;
     this.router = router;
   }

   ngOnInit():void{
     //this.currentRoute = Location.path;
     //console.log('route :'+this._route)

     //scroll to top of page on route change
     this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        //setTimeout(function(){
            window.scrollTo(0, 1);
        //}, 0);
       // window.scrollTo(0, 0)
      });
   }


}