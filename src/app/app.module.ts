import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortafolioComponent } from './components/portafolio/portafolio/portafolio.component';
import { ServiceComponent } from './components/services/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PortafolioComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
