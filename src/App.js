import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about';

function App() {
  return (
    <div>
      <Menu></Menu>
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
