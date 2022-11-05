import {Middleware} from 'redux'

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('state now: ', store.getState());
  console.log('fire action', action);
  next(action)
  console.log("state update: ", store.getState());
}