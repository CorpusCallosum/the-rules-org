import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ROUTES
import { HomePageComponent }    from './home-page.component';
import { AboutPageComponent }   from './about-page.component';
import { FaqPageComponent }     from './faq-page/faq-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'faq',  component: FaqPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
