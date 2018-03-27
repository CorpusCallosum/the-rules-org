import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import{AppRoutingModule}  from './app-routing.module'

//my custom components and services imported here
import { AppComponent }        from './app.component';
import { HomePageComponent }   from './home-page/home-page.component';
import { AboutPageComponent }   from './about-page/about-page.component';
import { FaqPageComponent }    from './faq-page/faq-page.component';
import { GetInvolvedPageComponent } from './get-involved-page/get-involved-page.component';
import { SearchableAccordianComponent } from './searchable-accordian/searchable-accordian.component';
import { BannerComponent } from './banner/banner.component';
import { VideoOverlayComponent } from './video-overlay/video-overlay.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { PagePostgrowthComponent } from './page-postgrowth/page-postgrowth.component';
import { SharableImageComponent } from './sharable-image/sharable-image.component';


//share buttons
import {ShareButtonsModule} from 'ngx-sharebuttons';
import { ShareButtonsOptions } from '@ngx-share/core';

//share buttons options
const customOptions: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'pinterest'],
  exclude: ['tumblr', 'stumble', 'vk'],
  theme: 'circles-dark'
}

//
@NgModule({
  declarations: [
  //and declared here:
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    FaqPageComponent,
    GetInvolvedPageComponent,
    SearchableAccordianComponent,
    BannerComponent,
    VideoOverlayComponent,
    NewsletterSignupComponent,
    PagePostgrowthComponent,
    SharableImageComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ShareButtonsModule.forRoot(customOptions),
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
