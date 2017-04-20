import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import{AppRoutingModule}  from './app-routing.module'

//my custom components and services imported here
import { AppComponent }        from './app.component';
import { HomePageComponent }   from './home-page.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';


//
@NgModule({
  declarations: [
  //and declared here:
    AppComponent,
    HomePageComponent,

    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
