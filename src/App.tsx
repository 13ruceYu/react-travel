import React from 'react';
import logo from './assets/logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input } from 'antd'

function App() {
  return (
    <div className={styles['App']}>
      <Layout.Header>
        <img src={logo} alt="logo" />
        <Typography.Title level={3}>摸鱼网</Typography.Title>
        <Input.Search placeholder='touch fish'></Input.Search>
      </Layout.Header>
    </div>
  );
}

export default App;
