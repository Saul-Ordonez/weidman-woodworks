import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  return (
    <React.Fragment>
      <div>
        <Link to='/' >Home</Link>
        <Link to='/aboutpage' >About</Link>
        <Link to='/gallerypage' >Gallery</Link>
        <Link to='/contactpage' >Contact</Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;