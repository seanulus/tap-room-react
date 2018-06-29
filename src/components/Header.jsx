import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`

      `}</style>
      <h1>Cure What Ales You Tap-Room and BBQ</h1>
      <div className='nav'>
        <Link to='/'>Home</Link>  <Link to='/hours'>Hours</Link>  <Link to='/produce'>Beer List</Link>
      </div>
    </div>
  );
}

export default Header;
