import React from 'react';

const Banner = ({ children }) => (
  <div style={{ 
    backgroundColor: '#eee', 
    borderLeft: '3px solid lightblue', 
    padding: '20px', 
    margin: '20px 0',
  }}>
    {children}
  </div>
);

export default Banner;