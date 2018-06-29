import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const button = {
    backgroundColor: '#e59329',
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
    borderRadius: '20px 0 0 20px',
    boxShadow: '-15px 0px rgb(46, 84, 10)'
  };
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
        }
        .nav {
          display: flex;
          justify-content: space-evenly;
          width: 50%;
          margin: auto;
          padding-bottom: 15px;
        }
        h1 {
          color: #5a1c1cc4;
        }
      `}</style>
      <h1>Farmers Forever</h1>
      <div className='nav'>
        <Link style={button} to='/'>Home</Link>  <Link style={button} to='/schedule'>Schedule</Link>  <Link style={button} to='/produce'>Available Produce</Link>
      </div>
    </div>
  );
}

export default Header;
