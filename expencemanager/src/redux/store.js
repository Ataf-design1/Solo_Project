import { legacy_createStore } from "redux";
import expenseReducer from "./expenceReducer";

export const store =  legacy_createStore(expenseReducer)