import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import{AppRoutingModule}  from './app-routing.module'

//my custom components and services imported here
import { AppComponent }        from './app.component';
import { HomePageComponent }   from './home-page/home-page.component';
import { AboutPageComponent }   from './about-page/about-page.component';
import { FaqPageComponent }    from './faq-page/faq-page.component';
import { GetInvolvedPageComponent } from './get-involved-page/get-involved-page.component';
import { SearchableAccordianComponent } from './searchable-accordian/searchable-accordian.component';


//
@NgModule({
  declarations: [
  //and declared here:
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    FaqPageComponent,
    GetInvolvedPageComponent,
    SearchableAccordianComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
