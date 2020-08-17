import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Discover from './pages/discover';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Menu/>
          {/* <Header/> */}
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/discover" component={Discover} />
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
