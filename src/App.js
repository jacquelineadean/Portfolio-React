import React from 'react';
// import Menu from './components/Menu';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
// import Discover from './pages/discover';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          {/* <Menu/> */}
          <Navbar />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              {/* <Route exact path="/discover" component={Discover} /> */}
              <Route component={About} />
            </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
