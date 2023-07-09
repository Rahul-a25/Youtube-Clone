import { legacy_createStore,applyMiddleware } from "redux";
import myreducer from "../Reducer/reducer";
import logger from "redux-logger";
const MyStore=legacy_createStore(myreducer,applyMiddleware(logger))
export default MyStore;