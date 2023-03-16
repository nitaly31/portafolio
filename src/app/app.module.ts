import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortafolioComponent } from './components/portafolio/portafolio/portafolio.component';
import { ServiceComponent } from './components/services/service/service.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { AboutComponent } from './components/about/about/about.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PortafolioComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
