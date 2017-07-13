import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
declare var jQuery:any;

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

    this.vid_w_orig = parseInt(jQuery('video').attr('width'));
    this.vid_h_orig = parseInt(jQuery('video').attr('height'));
    jQuery('#debug').append("<p>DOM loaded</p>");

    jQuery(window).resize(this.resizeToCover);
    jQuery(window).trigger('resize');
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

   //video resizing stuff...
   min_w = 300; // minimum video width allowed
   vid_w_orig;  // original video dimensions
   vid_h_orig;
   resizeToCover():void {
     console.log("resizeToCover");
    var h = .8; //video heigh as percentage of window height
    // set the video viewport to the window size
    jQuery('#video-viewport').width(jQuery(window).width());
    jQuery('#video-viewport').height(jQuery(window).height()*h);

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / this.vid_w_orig;
    var scale_v = jQuery(window).height() / this.vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * this.vid_w_orig < this.min_w) {scale = this.min_w / this.vid_w_orig;};

    // now scale the video
    jQuery('#hero-video').width(scale * this.vid_w_orig);
    jQuery('#hero-video').height(scale * this.vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-viewport').scrollLeft((jQuery('#hero-video').width() - jQuery(window).width()) / 2);
    jQuery('#video-viewport').scrollTop((jQuery('#hero-video').height() - jQuery(window).height()*h) / 2);
  };

}
