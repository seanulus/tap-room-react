import React from 'react';
import PropTypes from 'prop-types';

function Menu(props) {
  return(
    <div className='menu-items'>
      <style jsx>{`
          .menu-items {
            display flex;
          }
          img {
            width: 20vw;
            height: 20vw;
          }
          .description {
            padding-left: 10px;
          }
      `}</style>
      <div className='food-image'>
        <img src={props.image}/>
      </div>
      <div className='description'>
        <h4>{props.item}</h4>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

Menu.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string
};

export default Menu;
