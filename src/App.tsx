import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, DetailPage } from './pages'
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path={'/signIn'} render={() => <h1>登录页面</h1>}></Route>
          <Route path={'/detail/:touristRouteId'} component={DetailPage}></Route>
          <Route render={() => <h1>404</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
