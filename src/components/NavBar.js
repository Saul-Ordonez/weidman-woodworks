import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const container = {
    backgroundColor: 'black',
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 10,
    textAlign: 'right',
  }
  const navText = {
    color: 'white',
    textDecoration: 'none',
    padding: 70,
  }

  return (
    <React.Fragment>
      <div style={container}>
        <Link style={navText} to='/'>Home</Link>
        <Link style={navText} to='/aboutme'>About</Link>
        <Link style={navText} to='/gallery'>Gallery</Link>
        <Link style={navText} to='/contact'>Contact</Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;