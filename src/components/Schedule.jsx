import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){

  const info = {
    backgroundColor: 'lightgrey',
    color: 'navy',
    width: 'auto',
    height: '120px',
    fontFamily: 'sans-serif',
    fontSize: '20px'
  };

  const notHours = {
    marginTop: '5px',
  };

  const calendar = {
    backgroundColor: 'lightblue',
    borderRadius: '20px',
  };

  return (
    <div style={calendar}>
      <style jsx>{`
          p {
            padding: 15px;
          }

          h3 {
            text-align: center;
            font-size: 20px;
            text-shadow: 2px 2px lightgray;
          }
      `}</style>
      <h3>{props.day}</h3>
      <div style={info}>
        <p>{props.hours}<br/>
          <div style={notHours}><b>{props.location}</b><br/> Booth: {props.booth}</div></p>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
