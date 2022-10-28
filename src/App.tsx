import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { HomePage } from './pages'
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path="/" component={HomePage} >
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
