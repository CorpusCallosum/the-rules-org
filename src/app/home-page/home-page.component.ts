import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  videos = [
    {"src":"assets/videos/hero/CHANGE_THE_RULES.m4v", "title":"Change the Rules"},
    {"src":"assets/videos/hero/CULTURE_HACK_LAB.m4v", "title":"The Culture Hack Lab"},
  ];

  activeVideoId = 0;
  videoTitle:String = "";
  videoObject:HTMLVideoElement;
  hideVideo = true;

  constructor(private ref: ChangeDetectorRef) { 
  }

   ngOnInit():void{
    this.videoObject =  document.getElementById('hero-video') as HTMLVideoElement;
    this.videoObject.addEventListener('ended',this.onVideoEnded.bind(this),false);
    this.videoObject.addEventListener('loadeddata',this.onVideoLoaded.bind(this),false);
    //this.videoTitle = this.videos[this.activeVideoId].title;
   }

   onVideoLoaded():void{
      this.videoTitle = this.videos[this.activeVideoId].title;
      this.hideVideo = false;
   }

   onVideoEnded():void{
     console.log("onVideoEnded");
     //show the next video...
      if(this.activeVideoId >= this.videos.length-1)
        this.activeVideoId = 0;
      else
        this.activeVideoId = this.activeVideoId + 1;

      this.videoObject.currentTime = 0;
      this.videoTitle = "";
      this.hideVideo = true;
      this.ref.detectChanges();
   }

}