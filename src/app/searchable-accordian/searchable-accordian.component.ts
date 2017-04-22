import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-searchable-accordian',
  templateUrl: './searchable-accordian.component.html',
  styleUrls: ['./searchable-accordian.component.css']
})
export class SearchableAccordianComponent implements OnInit {

  @Input() title:string;

  data;
  questions;
  filteredResults;


  searchTerm:string = "";

   constructor(private http:Http) {
       // this.http.get('assets/faq.json')
         //       .subscribe(res => this.questions = res.json(), res => this.filteredResults = res.json());
                //.subscribe(res => this.data = res.json());
    }


  ngOnInit() {

    this.http.get('assets/faq.json')
      .subscribe(res => {
        this.questions = res.json();
        this.updateFilter();
        //this.filteredResults = this.questions.slice();
      });
  }

  /*questions = [
    {
      questionTxt:"What is Pokemon Go?",
      answerTxt:"DIY farm-to-table bitters, vegan gluten-free air plant cray health goth trust fund keytar flexitarian meh neutra sustainable readymade. Pok pok echo park VHS, post-ironic single-origin coffee vegan 90's wayfarers XOXO vice salvia YOLO umami aesthetic pour-over. Vinyl hot chicken forage neutra crucifix authentic. +1 humblebrag polaroid poke fixie. Umami green juice distillery snackwave, bicycle rights pok pok butcher knausgaard. Cred raclette affogato godard, hoodie kinfolk normcore flannel fashion axe viral coloring book marfa taxidermy. Trust fund pour-over selfies DIY iPhone everyday carry enamel pin roof party vinyl neutra."
    },
    {
      questionTxt:"What is a Causus?",
      answerTxt:"DIY farm-to-table bitters, vegan gluten-free air plant cray health goth trust fund keytar flexitarian meh neutra sustainable readymade. Pok pok echo park VHS, post-ironic single-origin coffee vegan 90's wayfarers XOXO vice salvia YOLO umami aesthetic pour-over. Vinyl hot chicken forage neutra crucifix authentic. +1 humblebrag polaroid poke fixie. Umami green juice distillery snackwave, bicycle rights pok pok butcher knausgaard. Cred raclette affogato godard, hoodie kinfolk normcore flannel fashion axe viral coloring book marfa taxidermy. Trust fund pour-over selfies DIY iPhone everyday carry enamel pin roof party vinyl neutra."
    },
    {
      questionTxt:"What is Brexit?",
      answerTxt:"DIY farm-to-table bitters, vegan gluten-free air plant cray health goth trust fund keytar flexitarian meh neutra sustainable readymade. Pok pok echo park VHS, post-ironic single-origin coffee vegan 90's wayfarers XOXO vice salvia YOLO umami aesthetic pour-over. Vinyl hot chicken forage neutra crucifix authentic. +1 humblebrag polaroid poke fixie. Umami green juice distillery snackwave, bicycle rights pok pok butcher knausgaard. Cred raclette affogato godard, hoodie kinfolk normcore flannel fashion axe viral coloring book marfa taxidermy. Trust fund pour-over selfies DIY iPhone everyday carry enamel pin roof party vinyl neutra."
    },
    {
      questionTxt:"What are electoral votes?",
      answerTxt:"DIY farm-to-table bitters, vegan gluten-free air plant cray health goth trust fund keytar flexitarian meh neutra sustainable readymade. Pok pok echo park VHS, post-ironic single-origin coffee vegan 90's wayfarers XOXO vice salvia YOLO umami aesthetic pour-over. Vinyl hot chicken forage neutra crucifix authentic. +1 humblebrag polaroid poke fixie. Umami green juice distillery snackwave, bicycle rights pok pok butcher knausgaard. Cred raclette affogato godard, hoodie kinfolk normcore flannel fashion axe viral coloring book marfa taxidermy. Trust fund pour-over selfies DIY iPhone everyday carry enamel pin roof party vinyl neutra."
    },
    {
      questionTxt:"What is the Electoral College?",
      answerTxt:"DIY farm-to-table bitters, vegan gluten-free air plant cray health goth trust fund keytar flexitarian meh neutra sustainable readymade. Pok pok echo park VHS, post-ironic single-origin coffee vegan 90's wayfarers XOXO vice salvia YOLO umami aesthetic pour-over. Vinyl hot chicken forage neutra crucifix authentic. +1 humblebrag polaroid poke fixie. Umami green juice distillery snackwave, bicycle rights pok pok butcher knausgaard. Cred raclette affogato godard, hoodie kinfolk normcore flannel fashion axe viral coloring book marfa taxidermy. Trust fund pour-over selfies DIY iPhone everyday carry enamel pin roof party vinyl neutra."
    },
  ]*/

 // questions = this.data;

 // filteredResults = this.questions.slice();

  updateFilter():void{
     console.log(this.questions);
    var that = this;
    this.filteredResults = this.questions.questions.filter(function(q){
      //return true;
      console.log("searching : "+q.questionTxt);
      console.log("for : "+that.searchTerm);
      if(q.questionTxt.toLowerCase().search(that.searchTerm.toLowerCase()) != -1)
        return true;
      else
        return false;
    })
  }

  onChange(): void {
   // console.log("onChange");
   // console.log("search term : "+this.searchTerm);
   this.updateFilter();
  }

}