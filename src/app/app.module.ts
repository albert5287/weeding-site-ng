import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { DetailsComponent } from './details/details.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    StoryComponent,
    DetailsComponent,
    AccommodationsComponent,
    RegistryComponent,
    RsvpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
