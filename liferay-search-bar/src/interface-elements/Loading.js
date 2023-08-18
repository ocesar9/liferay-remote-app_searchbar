import React, { useState, useEffect } from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
        <div className="loading-spinner"></div>
    </div>
  );
}

export default Loading;