import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { AsideComponent } from './aside/aside.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationComponent } from './destination/destination.component'; 
import { NotFoundComponent } from './not-found/not-found.component';

import { NavService } from './services/nav.service';
import { DestinationsService } from './services/destinations.service';

import { ShortenPipe } from './pipes/shorten.pipe';
import { SortDescPipe } from './pipes/sortDesc.pipe';
import { SortAscPipe } from './pipes/sort-asc.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    HomeComponent,
    AuthorComponent,
    AsideComponent,
    DestinationsComponent,
    ShortenPipe,
    SortDescPipe,
    SortAscPipe,
    DestinationComponent,
    NotFoundComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [NavService, DestinationsService],
  bootstrap: [AppComponent, NavComponent, FooterComponent]
})
export class AppModule { }
