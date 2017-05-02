import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-searchable-accordian',
  templateUrl: './searchable-accordian.component.html',
  styleUrls: ['./searchable-accordian.component.css']
})
export class SearchableAccordianComponent implements OnInit {

  @Input() title:string;
  @Input() dataFile:string;

  data;
  questions;
  filteredResults;


  searchTerm:string = "";

  constructor(private http:Http) {}

  ngOnInit() {

    this.http.get('assets/'+this.dataFile)
      .subscribe(res => {
        this.questions = res.json();
        this.updateFilter();
      });
  }


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

  //when search input box is typed in, tell the filter to UPDATE
  onChange(): void {
   this.updateFilter();
  }

}