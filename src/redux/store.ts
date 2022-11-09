// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import languageReducer from './language/languageReducer'
import { actionLog } from './middlewares/actionLog';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { shoppingCartSlice } from './shoppingCart/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog)
})

const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const rootStore = { store, persistedStore };

export default rootStore;