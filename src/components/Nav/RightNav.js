import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 175px;
    padding-top: 3.5rem;
  }

  .navText {
    color: #FFFFFF;
    text-decoration: none;
    padding: 18px 40px;
  }
`;

const RightNav = ({ open }) => {

  return (
    <Ul open={open}>
      <Link className='navText' to='/' >Home</Link>
      <Link className='navText' to='/aboutme'>About</Link>
      <Link className='navText' to='/gallery'>Gallery</Link>
      <Link className='navText' to='/contact'>Contact</Link>
    </Ul>
  )
}

export default RightNav;