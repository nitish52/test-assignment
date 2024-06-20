import { ActionType } from "../actions-types";
import { Dispatch } from "redux";
import { Action } from "../actions";


export const storePropertyData = (values: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.STOREPROPERTYDATA,
            payload: values
        })
    }
}

export const storeSubjectProperty = (values: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.STORESUBJECTPROPERTY,
            payload: values
        })
    }
}

export const storeSiteInfo = (values: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.STORESITEINFO,
            payload: values
        })
    }
}