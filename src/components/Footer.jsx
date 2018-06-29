import React from 'react';
import HoursList from './HoursList';

function Footer() {
  return(
    <div>
      <style jsx>{`
          div {
            background-color: black;
          }

      `}</style>
      <HoursList/>
    </div>
  );
}

export default Footer;
