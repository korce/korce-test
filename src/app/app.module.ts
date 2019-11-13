import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { TestComponent } from './test/test.component';
import { LogoComponent } from './logo/logo.component';
import { KonceptComponent } from './koncept/koncept.component';
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
import { ImageSliderMobileComponent } from './image-slider-mobile/image-slider-mobile.component';
import { ImageSlider2MobileComponent } from './image-slider2-mobile/image-slider2-mobile.component';
import { MalaNabidkaMobileComponent } from './mala-nabidka copy/mala-nabidka-mobile.component';
import { SpagetyMobileComponent } from './mala-nabidka copy/spagety-mobile/spagety-mobile.component';
import { CroissantyMobileComponent } from './mala-nabidka copy/croissanty-mobile/croissanty-mobile.component';
import { PolevkyMobileComponent } from './mala-nabidka copy/polevky-mobile/polevky-mobile.component';
import { CeskeJidloMobileComponent } from './mala-nabidka copy/ceske-jidlo-mobile/ceske-jidlo-mobile.component';
import { SteakyMobileComponent } from './mala-nabidka copy/steaky-mobile/steaky-mobile.component';
import { VeganMobileComponent } from './mala-nabidka copy/vegan-mobile/vegan-mobile.component';
import { SladkeMobileComponent } from './mala-nabidka copy/sladke-mobile/sladke-mobile.component';
import { NealkoMobileComponent } from './mala-nabidka copy/nealko-mobile/nealko-mobile.component';
import { AlkoMobileComponent } from './mala-nabidka copy/alko-mobile/alko-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    JumbotronComponent,
    WelcomeSectionComponent,
    TestComponent,
    LogoComponent,
    KonceptComponent,
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
    ObjednavkaComponent,
    MalaNabidkaMobileComponent,
    SpagetyMobileComponent,
    CroissantyMobileComponent,
    PolevkyMobileComponent,
    CeskeJidloMobileComponent,
    SteakyMobileComponent,
    VeganMobileComponent,
    SladkeMobileComponent,
    NealkoMobileComponent,
    AlkoMobileComponent,
    ImageSliderMobileComponent,
    ImageSlider2MobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DeviceDetectorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
