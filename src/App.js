import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Kuesioner from './pages/kuesioner/Kuesioner';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/kuesioner" component={Kuesioner}/>
      {/* <Footer />  */}
    </BrowserRouter>
  )
}

export default App;
