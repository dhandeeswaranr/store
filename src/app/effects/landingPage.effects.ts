import { Injectable } from '@angular/core'
import { Actions, Effect, ofType} from '@ngrx/effects'
//import * as landingPageActionsCall from '../actions'
import {LandingPageService } from '../service/landing-page.service'
import {landinPageState} from '../reducers/landingPage.reducers'
import * as fromLandinpageReducers from '../reducers'
import {landingModel} from '../models/landinData.models'
import {Store, Action } from '@ngrx/store'
import { ActivatedRoute, Route} from '@angular/router'
//import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable, Subject, ReplaySubject, from, of, range, of as observableOf} from 'rxjs';
import { map, filter, switchMap, catchError, startWith } from 'rxjs/operators';
//import { setFlagsFromString } from 'v8';
//import "rxjs/add/operator/switchMap";
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map'
import * as fromLandingPageAction from '../actions'

@Injectable()
export class landinPageEffect{
    constructor(
      private actions$:Actions, 
      private store$:Store<landinPageState>,
        private landingPageServiceCall:LandingPageService){}

 /*@Effect()
 fasdf$ = this.actions$.ofType()
 .switcMap(payload => this.landingPageServiceCall.landingPageService())
 .map()*/

  //.map(payload => this.landingPageServiceCall.landingPageService())
  /*@Effect() 
getLandingPage$ = this.actions$
.ofType(landingPageActionsCall.LOAD_LANDING_PAGE)
//.withLatestFrom()

.switchMap(payload => this.landingPageServiceCall.landingPageService())
.map(response => ({type : landingPageActionsCall.LOAD_LANDING_PAGE_SUCCESS, payload:response.json()}))
.catch(() => Observable.of({type : landingPageActionsCall.LOAD_LANDING_PAGE_FAIL}))*/
/*@Effect() land$=this.actions$
.ofType(landingPageActionsCall.LOAD_LANDING_PAGE)
.pipe(
  switchMap(() => {
    console.log("effect hit"+this.landingPageServiceCall.landingPageService())
    return  this.landingPageServiceCall.landingPageService();
  }),
  //switchMap(payload => this.landingPageServiceCall.landingPageService()),
  map(response => new landingPageActionsCall.loadLandingPageSuccess(response)),
 // catchError((err: HttpErrorResponse) => {err:landingPageActionsCall.LOAD_LANDING_PAGE_FAIL})

)*/

/*@Effect() 

 loadData = actions$ => this.actions$.pipe(

    ofType(landingPageActionsCall.landinPageActions.LOAD_LANDING_PAGE),
  switchMap((data) => {
    console.log("effect" +this.landingPageServiceCall.landingPageService())
    
      return this.landingPageServiceCall.landingPageService()
    .pipe(
      map(res => new landingPageActionsCall.landinPageActions.loadLandingPageSuccess(res)),
      catchError(error => of(new landingPageActionsCall.landinPageActions.loadLandingFail()))
      
    
    )
  }
   
)
 )*/

@Effect()

loadData$:Observable<Action> = this.actions$.pipe
(
  ofType(fromLandingPageAction.landinPageActions.LOAD_LANDING_PAGE),
  switchMap
  ( 
    action => this.landingPageServiceCall.landingPageService()
    .pipe
    (
      map
      (
        items => new fromLandingPageAction.landinPageActions.loadLandingPageSuccessData
        (  items 
        )
      ),
      catchError(error => observableOf(new fromLandingPageAction.landinPageActions.loadLandingFail()))
      )
    )

  );
//);

}