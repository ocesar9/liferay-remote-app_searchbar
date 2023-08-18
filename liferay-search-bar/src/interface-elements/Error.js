import React from 'react';
import './Error.css';

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">{message}</div>
    </div>
  );
};

export default Error;
