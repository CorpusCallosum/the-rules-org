import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sharable-image',
  templateUrl: './sharable-image.component.html',
  styleUrls: ['./sharable-image.component.css']
})
export class SharableImageComponent implements OnInit {

  @Input() url:string;
  @Input() title:string;


  constructor() { }

  ngOnInit() {
  }

}
