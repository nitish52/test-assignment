import { combineReducers } from "redux";
import buildingDetailsReducer from "../reducer/addbuildingdetails"


const appReducer = combineReducers({
    buildingDetailsReducer
  });

  const rootReducer = (state:any, action:any) => {
  
    return appReducer(state, action);
  };
  
  export default rootReducer;
// const reducers = combineReducers({
//     buildingDetails: buildingDetailsReducer
// });

// export default reducers;

export type State = ReturnType<typeof rootReducer>