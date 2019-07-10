import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects'
import { StoreModule, MetaReducer, State}  from '@ngrx/store'
import {StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { storeFreeze } from 'ngrx-store-freeze'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppComponent } from './app.component';
import {HttpClient} from '@angular/common/http'
//import '/rxjs-operators';
import { observable } from 'rxjs'
import { environment} from '../environments/environment'
import * as pageEffect from './effects'
import { landinPageEffect} from './effects/landingPage.effects'
import { landinPageReducer } from './reducers/landingPage.reducers';
import * as ReducerIndex from './reducers'
import { LandingPageService} from './service/landing-page.service'
import { HttpClientModule} from '@angular/common/http'
//export const metaReducers:MetaReducer<State , T>[] = !environment.production ? [storeFreeze]:[];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('landingPage', ReducerIndex),
    EffectsModule.forFeature ([landinPageEffect]),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
