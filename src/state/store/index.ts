import { createStore, applyMiddleware,compose, Middleware} from "redux";
import rootReducer from "../reducer/index";
import {thunk} from "redux-thunk";
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
      'buildingDetails'
    ],
  };

//   let middleware = [];
// middleware = [...middleware, thunk];
const middlewares:any =  [thunk];

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  //export const store = createStore(reducers, {}, applyMiddleware(thunk))

export const store = createStore(persistedReducer,undefined,applyMiddleware(...middlewares))



