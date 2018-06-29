import React from 'react';
import PropTypes from 'prop-types';

function Beers(props){
  return (
    <div>
      <style jsx>{`
          
          `}</style>
      <div>
        <h3>{props.brewer}</h3>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        <p>{props.abv}</p>
      </div>
      <div>
        <p>{props.price}</p>
        <p>{props.remaining}</p>
      </div>
    </div>
  );
}

Beers.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Beers;
