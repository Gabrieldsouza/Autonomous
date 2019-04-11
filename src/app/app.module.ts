import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutonomosService} from './autonomos/autonomos.service';
import {HttpClientModule} from '@angular/common/http';
import {AutonomoDetailPageModule} from './autonomo-detail/autonomo-detail.module';
import {AutonomosPageModule} from './autonomos/autonomos.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AutonomoDetailPageModule,
      AutonomosPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    AutonomosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
