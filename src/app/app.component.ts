import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { landingModel} from './models/landinData.models'
import { Observable } from 'rxjs';
import * as fromLandinPageReducer from './reducers'
//import { landinPageReducer, landinPageState} from './reducers/landingPage.reducers'
import * as fromLandingPageAction from './actions'
import * as fromEfecct from './effects'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
loadData:Observable<any>
 constructor(private store$:Store<any[]>){}

 ngOnInit(){
  this.store$.dispatch(new fromLandingPageAction.landinPageActions.loadLandingPage())
  //this.store$.dispatch(new fromLandingPageAction.landinPageActions.loadLandingPageSuccess('d'))
  //this.loadData = this.store$.select(new fromLandingPageAction.landinPageActions.loadLandingPageSuccess())
 //this.loadData = this.store$.select(fromLandinPageReducer)
  //this.loadData.subscribe(dta => this.loadData = dta)
 }
}
