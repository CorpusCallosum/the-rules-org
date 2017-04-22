import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})

export class FaqPageComponent implements OnInit {

  cdr:ChangeDetectorRef;
  constructor(cdr: ChangeDetectorRef) {
    this.cdr = cdr;
  }

  ngOnInit() {
  }

  searchTerm:string;

  questions = [
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
  ]


  filteredResults = this.questions.slice();

  onChange(): void {
    console.log("onChange");
   // console.log("search term : "+this.searchTerm);

    console.log(this.questions);
    var that = this;
    this.filteredResults = this.questions.filter(function(q){
      //return true;
      console.log("searching : "+q.questionTxt);
      console.log("for : "+that.searchTerm);
      if(q.questionTxt.toLowerCase().search(that.searchTerm.toLowerCase()) != -1)
        return true;
      else
        return false;
    })
    //this.cdr.detectChanges();
  }

}
