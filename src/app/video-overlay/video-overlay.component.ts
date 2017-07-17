import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss']
})
export class VideoOverlayComponent implements OnInit {

  @Input() ytid:string;
  url: SafeResourceUrl;

  isOpen:Boolean = false;
  debug:Boolean = true;

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
    //concat the id into the youtube src url
    var ytUrl = "https://www.youtube.com/embed/"+this.ytid+"?rel=0&amp;showinfo=0?ecver=1";
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(ytUrl);
  }

  launch(){
    if(this.debug)
      console.log('launch video overlay');

    this.isOpen = true;
  }

  close(){
    this.isOpen = false;
  }

}
