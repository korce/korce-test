import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { TestComponent } from './test/test.component';
import { LogoComponent } from './logo/logo.component';
import { FotkyComponent } from './fotky/fotky.component';
import { KonceptComponent } from './koncept/koncept.component';
import { CenikComponent } from './cenik/cenik.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImageSlider2Component } from './image-slider2/image-slider2.component';
import { MalaNabidkaComponent } from './mala-nabidka/mala-nabidka.component';
import { SpagetyComponent } from './mala-nabidka/spagety/spagety.component';
import { CroissantyComponent } from './mala-nabidka/croissanty/croissanty.component';
import { PolevkyComponent } from './mala-nabidka/polevky/polevky.component';
import { CeskeJidloComponent } from './mala-nabidka/ceske-jidlo/ceske-jidlo.component';
import { SteakyComponent } from './mala-nabidka/steaky/steaky.component';
import { VeganComponent } from './mala-nabidka/vegan/vegan.component';
import { SladkeComponent } from './mala-nabidka/sladke/sladke.component';
import { NealkoComponent } from './mala-nabidka/nealko/nealko.component';
import { AlkoComponent } from './mala-nabidka/alko/alko.component';
import { ObjednavkaComponent } from './objednavka/objednavka.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    TestComponent,
    LogoComponent,
    FotkyComponent,
    KonceptComponent,
    CenikComponent,
    KontaktComponent,
    ImageSlider2Component,
    MalaNabidkaComponent,
    SpagetyComponent,
    CroissantyComponent,
    PolevkyComponent,
    CeskeJidloComponent,
    SteakyComponent,
    VeganComponent,
    SladkeComponent,
    NealkoComponent,
    AlkoComponent,
    ObjednavkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
