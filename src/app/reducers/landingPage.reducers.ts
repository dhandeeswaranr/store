//import { landinPageActions } from '../actions/landingPage.actions';
import * as fromLandinPageAction from '../actions/landingPage.actions'
import { landingModel } from '../models/landinData.models'
//import { map, filter, switchMap, catchError } from 'rxjs/operators';
import{createFeatureSelector, createSelector, combineReducers} from '@ngrx/store'
export interface landinPageState{
    loading:boolean;
    landingPageDatas:landingModel[];
    loaded:boolean;
    datafrom:any;
}

export const initialState: landinPageState ={
    landingPageDatas:[],
    loading:false,
    loaded:false,
    datafrom:null
}

export function landinPageReducer(state = initialState, actions:fromLandinPageAction.Actions): landinPageState{
    switch(actions.type)
    {
        case fromLandinPageAction.LOAD_LANDING_PAGE : {
            console.log("first"+state);
            return{
                ...state,
                loading:true
                
            }
        }
        case fromLandinPageAction.LOAD_LANDING_PAGE_SUCCESS : {
            return{
                ...state,
                loading:false,
                loaded:true,
               // datafrom:actions.payload
              //  ..actions.payload
             //  landingPageData:[
              //  ...actions.payload
                /*(
                   (item) => {
                       const items = new landingModel(item)
                       console.log("reducer "+items.person_name)
                       return items                   }
                )*/
             //  ]

               //landingPageData:[...actions.payload]
               
            
            };
           
            

        }

        case fromLandinPageAction.LOAD_LANDING_PAGE_SUCCESS_DATA:{
            const admin = actions.payload.slice()
            return{
                ...state,
                landingPageDatas:[]
            }
        }

        case fromLandinPageAction.LOAD_LANDING_PAGE_FAIL : {
            return{
                ...state,
                loading:false,
                loaded:false
            }
        }

        default:{
            return state
            
        }
    }
       
    
}
//export const getState = createFeatureSelector<landinPageState>("landingPage")
export const selectpageStatu = (state:landinPageState) => state.landingPageDatas;

/*export const selectLandinPageStatus =(state: landinPageState) => (
    {
        landingPageData:state.landingPageData
    }
)*/