import React from 'react';
import tapHouse from '../assets/img/tap-house.jpg';

function HomePage() {
  return (
    <div>
      <style jsx>{`
          div {
            color: white;
          }
          .tap-image {
            width: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${tapHouse});
          }

    `}</style>
      <div className='tap-image'>

      </div>
    </div>
  );
}

export default HomePage;
