import { ActionType } from "../actions-types"

interface STOREPROPERTYDATA {
    type: ActionType.STOREPROPERTYDATA,
    payload: any
}

interface STORESUBJECTPROPERTY {
    type: ActionType.STORESUBJECTPROPERTY,
    payload: any
}

interface STORESITEINFO {
    type: ActionType.STORESITEINFO,
    payload: any
}

export type Action = STOREPROPERTYDATA | STORESUBJECTPROPERTY | STORESITEINFO