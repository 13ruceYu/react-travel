import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, DetailPage, SignInPage, SearchPage, RegisterPage, ShoppingCartPage } from './pages'
import styles from "./App.module.css";
import { useAppDispatch, useSelector } from "./redux/hooks";
import { getShoppingCart } from "./redux/shoppingCart/slice";

const PrivateRoute = ({ children }) => {
  const jwt = useSelector(s => s.user.token)
  return jwt ? children : <Navigate to={'/signIn'}></Navigate>
}

function App() {
  const jwt = useSelector(s => s.user.token)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [dispatch, jwt])

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path={'/signIn'} element={<SignInPage></SignInPage>}></Route>
          <Route path={'/register'} element={<RegisterPage></RegisterPage>}></Route>
          <Route path={'/detail/:touristRouteId'} element={<DetailPage></DetailPage>}></Route>
          <Route path={'/search'}>
            <Route index element={<SearchPage></SearchPage>} />
            <Route path={':keywords'} element={<SearchPage></SearchPage>} />
          </Route>
          <Route path={'/shoppingCart'} element={
            <PrivateRoute>
              <ShoppingCartPage></ShoppingCartPage>
            </PrivateRoute>
          }></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
