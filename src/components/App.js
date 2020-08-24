import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

class App extends React.Component {

  render() {

    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </React.Fragment>
    );

  }

}

export default App;
   