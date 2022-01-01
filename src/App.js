import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <footer><Footer/></footer>      
    </div>
  );
}

export default App;
