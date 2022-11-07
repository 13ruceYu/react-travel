import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, DetailPage, SignInPage, SearchPage, RegisterPage } from './pages'
import styles from "./App.module.css";

function App() {
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
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
