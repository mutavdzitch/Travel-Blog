// import { AuthGuardService } from './services/auth-guard/auth-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationComponent } from './destination/destination.component'; 
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'destinations',
    component: DestinationsComponent
  },
  {
    path: 'destinations/category/:category',
    component: DestinationsComponent
  },
  {
    path: 'destination/:id',
    component: DestinationComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
