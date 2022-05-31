import React from 'react'
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
      <div className='mobile-div'>
        <h1>Mobile Operating System</h1>
        <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>Iphone</li>
            <li>Windows Phone</li>
        </ul>
        {/* <br /> */}
        <h1>Mobile Manufacturers</h1>
        <ul>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>
        </ul>

      </div>
    </div>
    </>
  );
}

export default App;
