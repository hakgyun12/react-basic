import { combineReducers } from "redux";
import counter, {counterSage} from "./counter";
import sample, { sampleSage } from "./sample";
import loading from './loading';
import { all } from "@redux-saga/core/effects";

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSaga() {
    yield all([counterSage(), sampleSage()]);
}

export default rootReducer;