import { combineReducers } from "redux"
import accountsReducer from "./accountsReducer"
import displayReducer from "./displayReducer"

export const rootReducer = combineReducers({
  accountsData: accountsReducer,
  displayData: displayReducer,
})
