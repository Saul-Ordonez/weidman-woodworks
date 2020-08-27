import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: black;
  padding: 2px 30px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 5px;
    color: #ffffff
  }
`;


const NavBar = () => {

  return (
    <Nav>
      <div className="logo">
        Weidman Woodworks
      </div>
      <Burger />
    </Nav>
  );
}

export default NavBar;