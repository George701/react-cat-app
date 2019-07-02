import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <Header/>
        <div className="container">
          <Main/>
        </div>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
