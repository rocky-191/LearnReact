import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import reducers from "./reducers"
import {getAllProducts} from "../actions/index"

const middleWares=[thunk];
if(process.env.NODE_ENV==="development"){
    middleWares.push(createLogger());
}

const store=createStore(reducers,applyMiddleware(...middleWares))

store.dispatch(getAllProducts())

export default store;