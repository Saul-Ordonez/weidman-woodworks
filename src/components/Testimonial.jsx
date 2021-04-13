import React from 'react';

export default function Testimonial(props) {

    const testimonialStyle = {
        color: 'black',
        border: '1px solid black',
        padding: '.5em',
        margin: '.5em',
        maxWidth: '500px',
    }

  return (
    <div style={testimonialStyle}>
        <p>{props.quote}</p>
        <p>- {props.author}</p>
    </div>
  );
}