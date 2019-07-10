import{createFeatureSelector, createSelector, combineReducers, ActionReducerMap} from '@ngrx/store'

import * as fromLandingPageReducers from './landingPage.reducers'

export interface landingPageFirstState {
    landinState:fromLandingPageReducers.landinPageState
}
/*export const State : landingPageFirstState ={
    landingPage:landingPageFirstState
} */
export const reducers:ActionReducerMap<any> {
    landinState:fromLandingPageReducers.landinPageReducer
}

export const landingPageReducers = fromLandingPageReducers.landinPageReducer;
export const getState = createFeatureSelector<landingPageFirstState>("landingPage")
//export const selectLandingPage = createSelector(getState, fromLandingPageReducers.selectpageStatu)




export const selectLandipageState = createFeatureSelector<landingPageFirstState>("landingPage");

export const selectCompleted = createSelector( selectLandipageState, state => state.landinState);
// export const selectRole = createSelector(selectCompleted, 
//     state => {
        
//     return state.landingPageData
//     });

  



