import React from 'react';
import PropTypes from 'prop-types';

function Hours(props){
  return (
    <div>
      <style jsx>{`

      `}</style>
      <h3>{props.day}</h3>
      <p>{props.hours}</p>
    </div>
  );
}

Hours.propTypes = {
  day: PropTypes.string,
  hours: PropTypes.string
};

export default Hours;