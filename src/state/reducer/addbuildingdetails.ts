import { Action } from "../actions";
import { ActionType } from "../actions-types";

const initialState = {
    propertyData:'',
    subjectProperty:'',
    siteInfo:''
};

const buildingDetailsReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.STOREPROPERTYDATA:
            return {
                ...state,
                propertyData: action.payload,
              };
        case ActionType.STORESUBJECTPROPERTY:
            return {
                ...state,
                subjectProperty: action.payload,
              };
        case ActionType.STORESITEINFO:
            return {
                ...state,
                siteInfo: action.payload,
              };
        default:
            return state;
    }
}

export default buildingDetailsReducer; 