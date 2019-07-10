import { Action } from '@ngrx/store'
import { landingModel} from '../models/landinData.models'

export const LOAD_LANDING_PAGE = '[LANDING PAGE] Load';
export const LOAD_LANDING_PAGE_SUCCESS = '[LANDING PAGE] Load Success';
export const LOAD_LANDING_PAGE_SUCCESS_DATA = '[LANDING PAGE] Load Success Data';
export const LOAD_LANDING_PAGE_FAIL = '[LANDING PAGE] Fail';


export class loadLandingPage implements Action{
    readonly type = LOAD_LANDING_PAGE
}

export class loadLandingPageSuccess implements Action{
    readonly type = LOAD_LANDING_PAGE_SUCCESS;
    constructor(public payload:any){}
}
export class loadLandingPageSuccessData implements Action{
    readonly type = LOAD_LANDING_PAGE_SUCCESS_DATA;
    constructor(public payload:landingModel[]){}
}

export class loadLandingFail implements Action{
    readonly type = LOAD_LANDING_PAGE_FAIL;
}

export type Actions =
| loadLandingPage
| loadLandingPageSuccess
| loadLandingPageSuccessData
| loadLandingFail