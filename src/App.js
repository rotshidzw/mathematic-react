import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/navigation';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quotes from './components/quotes';
import Footer from './components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
