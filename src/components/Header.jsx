import React from 'react';
import { Link } from 'react-router-dom';



function Header(){

  const link = {
    textDecoration: 'none',
    color: 'black'
  }
  return (
    <div>
      <style jsx>{`
          h1 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 300;
            text-align: center;
            text-decoration: underline;
            text-underline-position: under;
            margin-bottom: 0px;
          }
          h2 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 300;
            text-align: center;
            margin-top: 5px;
          }
          .nav {
            display: flex;
            justify-content: space-evenly;
            font-size: 20px;
          }
      `}</style>
      <h1>Cure What Ales You</h1>
      <h2>Tap-Room and BBQ</h2>
      <div className='nav'>
        <Link style={link} to='/'>Home</Link>  <Link style={link} to='/hours'>Hours</Link>  <Link style={link} to='/beers'>Beer List</Link>
      </div>
    </div>
  );
}

export default Header;
