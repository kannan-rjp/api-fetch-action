import { combineReducers } from "redux";

import userreducer from "./userreducer";
import particularreducer from "./particularreducer";


export default combineReducers ({
    userreducer,particularreducer
})