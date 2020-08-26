import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Error404 from './Error404';

class App extends React.Component {

  render() {

    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path= '/contact' component={Contact} />
          <Route component={Error404} />
        </Switch>
      </React.Fragment>
    );

  }

}

export default App;
   