import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  videos = [
    {
      "src":"assets/videos/hero/CHANGE_THE_RULES.m4v",
      "title":"Brooklyn offal retro drinking vinegar officia mixtape meggings literally bicycle rights. Duis before they sold out ugh, kitsch wayfarers shaman affogato twee synth chia laboris subway tile post-ironic air plant salvia. 3 wolf moon jean shorts pok pok man braid la croix PBR&B artisan deserunt nulla asymmetrical nisi messenger bag air plant snackwave keffiyeh."
    },
    {
      "src":"assets/videos/hero/CULTURE_HACK_LAB.m4v",
      "title":"The CHL is the space where we work to better understand what stories are shaping culture. We seek to answer questions such as: what are the stories we believe and share about how the world works? How do these stories help sustain the way human beings or the environment are defined by the economy? The CHL test the ways of effectively changing those stories over time, so as to change our culture."
    }
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
