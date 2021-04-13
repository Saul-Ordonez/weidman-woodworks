import React from 'react';

export default function Testimonial(props) {
    const heroStyle = {
        width: '100%',
        backgroundColor: '#907D6A',
    }
    const testimonialStyle = {
        display: 'flex,',
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
        padding: '1em',
        margin: '0 auto',
        width: '50%',
    }

    const authorStyle = {
        textAlign: 'right',
        fontSize: '1.5rem',
    }

  return (
    <div style={heroStyle}>
        <div style={testimonialStyle}>
            <p>{props.quote}</p>
            <p style={authorStyle}>- {props.author}</p>
        </div>
    </div>
  );
}