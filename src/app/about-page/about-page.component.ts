import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})

export class AboutPageComponent implements OnInit {

   badges = [
     {
       "id":"activist_ashram",
       "title":"Activist Ashram",
       "text":"The Activist Ashram: The Activist Ashram is a year-long fellowship for front-line organisers, with strong community ties. It provides a space for solidarity building for individuals facing up to oppression around the world. Combining both in-person and virtual sessions, fellows are able to examine how their various struggles are related, as well as share safe space, experiences, analysis, wisdom, and organising tactics. The programme, co-created with the fellows, focuses on the holistic aspects of activism and the spiritual aspects of the struggle."
     },
     {
       "id":"asha",
       "title":"Asha",
       "text":"text for Asha..."
     },
     {
       "id":"aurora",
       "title":"Aurora",
       "text":"The TR online community: Across our various social networks we’re nurturing conversations with individuals and organisations who share the belief that our capitalist system needs to be replaced with a myriad of local alternatives that value people and planet. Whether on Facebook, YouTube, Instagram or Twitter, we want create a space for debate, inspiration and collaboration."
     }

   ];

   selectedBadge:Number = 0;

   ngOnInit():void{

   }

   selectBadge(i:Number):void{
     this.selectedBadge = i;
   }
}