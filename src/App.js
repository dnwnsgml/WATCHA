import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className='header'>
        <div className='header_top'>
          <div className='logo'>
            <Link to="/">
              <img src='https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd05ded51-54bf-4174-8b7e-e021c6eb6b5a%2FWATCHA_LOGO.svg&blockId=400d70c6-5698-4877-9ddf-83be123fb341' alt='' />
            </Link>
          </div>
          <div className='login'>
            <a href='#'></a>
          </div>
        </div>
        <div className='header_bot'>
          <div className='nav'>
            <ul>
              <li>

              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
