import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  videos = [
    {"src":"assets/videos/hero/CHANGE_THE_RULES.m4v"},
    {"src":"assets/videos/hero/CULTURE_HACK_LAB.m4v"},
  ];

  activeVideoId = 0;

  videoObject:HTMLVideoElement;

  constructor(private ref: ChangeDetectorRef) { 
  }

   ngOnInit():void{
    this.videoObject =  document.getElementById('hero-video') as HTMLVideoElement;
    this.videoObject.addEventListener('ended',this.onVideoEnded.bind(this),false);
   }

   onVideoEnded():void{
     console.log("onVideoEnded");
     //show the next video...
      if(this.activeVideoId >= this.videos.length-1)
        this.activeVideoId = 0;
      else
        this.activeVideoId = this.activeVideoId + 1;

      this.videoObject.currentTime = 0;
      //this.videoObject.play();

      this.ref.detectChanges();
   }

}