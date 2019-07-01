import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}

export default App;
