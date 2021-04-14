import React from 'react';

const Footer = () => {

  const container = {
    width: '100%',
    borderTop: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5em 0',
    fontSize: '.65rem',
  }

  return (
    <React.Fragment>
      <footer style={container}>
        <div>
        <p>© 2021 Weidman Woodworks LLC</p>
        <p>Aaron Weidman</p>
        <p>weidmanaaron@gmail.com</p>
        <p>503 929 2810</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;