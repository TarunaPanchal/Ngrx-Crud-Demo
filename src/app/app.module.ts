import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { StudentSerializer } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      router: routerReducer
    }), // Reducer
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: StudentSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
