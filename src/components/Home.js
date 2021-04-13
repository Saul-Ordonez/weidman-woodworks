import React from 'react';
import Testimonial from './Testimonial'

const Home = () => {
  const titleStyle = {
    marginLeft: 20,
  }
  return (
    <React.Fragment>
      <h1 style={titleStyle}>Weidman Woodworks</h1>
      <Testimonial author='John Doe' quote='Donec id lorem non nunc blandit molestie sit amet in massa. Phasellus ac ultrices mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas viverra.'/>
    </React.Fragment>
  );
}

export default Home;