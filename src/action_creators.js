import * as actionTypes from "./actionTypes"

export const START = () => {
  return {
    type: actionTypes.START,
  }
}

export const DISPLAY_ACCOUNTS_ACTION = () => {
  return {
    type: actionTypes.DISPLAY_ACCOUNTS_ACTION,
  }
}

export const DISPLAY_ADD_ACCOUNTS_ACTION = () => {
  return {
    type: actionTypes.DISPLAY_ADD_ACCOUNTS_ACTION,
  }
}

export const ADD_NEW_ACCOUNT = (newAccount) => {
  return {
    type: actionTypes.ADD_NEW_ACCOUNT,
    payload: {
      newAccount: newAccount,
    },
  }
}

export const DELETE_ACCOUNT_ACTION = (id) => {
  return {
    type: actionTypes.DELETE_ACCOUNT,
    payload: {
      id: id,
    },
  }
}
