import React from 'react';
import flipFlops from '../Images/flip-flops.jpg';

const About = () => {
  const titleStyle = {
    marginLeft: 20,
  }

  const  imageStyle = {
    display: 'none',
  }

  return (
    <React.Fragment>
      <h1 style={titleStyle}>This is the About page</h1>
      <img  style={imageStyle} src={flipFlops} alt="Flip Flops" />
    </React.Fragment>
  );
}

export default About;