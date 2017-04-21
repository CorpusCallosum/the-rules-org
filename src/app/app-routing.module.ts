import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ROUTES
import { HomePageComponent }    from './home-page.component';
import { AboutPageComponent }   from './about-page.component';


//OLD STUFF FROM TUTORIAL CAN BE REMOVED LATER
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about',  component: AboutPageComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
