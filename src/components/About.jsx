import React from 'react';

const About = () => {
  const titleStyle = {
    marginLeft: 20,
  }

  const  imageStyle = {
    display: 'none',
  }

  const paragraphContainer = {
    border: 'solid',
    borderColor: 'red',
    maxWidth: '50vh',
    color: 'white',
    display: 'flex',
    
  }

  return (
    <React.Fragment>
      <h1 style={titleStyle}>This is the About page</h1>
      <div style={paragraphContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit libero vitae magna suscipit, id ultricies augue viverra. Phasellus vulputate sapien ac nunc pellentesque malesuada. Sed nunc arcu, ornare ac nisl sit amet, viverra ultrices magna. Pellentesque viverra hendrerit urna, dapibus aliquam augue finibus vehicula. Nam egestas tincidunt orci. Proin non elementum ante. Nunc condimentum lectus id lectus vestibulum imperdiet. Donec ornare, augue eget sollicitudin dapibus, est est condimentum lectus, ac venenatis diam elit nec felis. Etiam tempor, metus at ultricies vehicula, ante lacus tempor magna, sit amet scelerisque ipsum eros quis erat. Phasellus ac mauris efficitur, gravida lorem quis, consequat ligula. Morbi volutpat at risus nec placerat. Nunc finibus sodales est a placerat.

          Morbi massa diam, porttitor at luctus ultricies, accumsan sed metus. Etiam at mauris ac nulla tristique aliquet et vitae sem. Phasellus vitae tincidunt sem, quis feugiat tortor. Maecenas consequat et est et consequat. Vivamus volutpat quam vitae maximus vulputate. In ac arcu velit. Pellentesque iaculis efficitur est, ut commodo ligula tincidunt non. Donec sit amet nunc vel turpis sollicitudin lacinia non sed augue. Sed interdum elit turpis, ut ultricies lacus commodo eget. Quisque mi urna, volutpat sed tortor eget, euismod molestie ante.
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;