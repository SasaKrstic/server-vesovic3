import * as actions from "./actionTypes"
import { displayState } from "./initialState"

function displayReducer(state = displayState, action) {
  switch (action.type) {
    case actions.DISPLAY_ACCOUNTS_ACTION:
      return { ...state, display: 1 }

    case actions.DISPLAY_ADD_ACCOUNTS_ACTION:
      return { ...state, display: 2 }

    default:
      return state
  }
}

export default displayReducer
