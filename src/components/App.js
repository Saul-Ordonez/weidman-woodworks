import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

class App extends React.Component {

  render() {

    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutpage' component={About} />
          <Route path='/gallerypage' component={Gallery} />
          <Route path= '/contactpage' component={Contact} />
        </Switch>
      </React.Fragment>
    );

  }

}

export default App;
   