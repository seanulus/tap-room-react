import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <style jsx>{`
          div {
            width: 30%;
            background-color: rgb(46, 84, 10, 0.8);
            margin-top: 5px;
            text-align: center;
            padding: 0px 10px 10px 10px;
            height: 275.5px;
            z-index: 2;
          }

          ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 4;
            -moz-column-count: 4;
            column-count: 4;
          }

          div:nth-child(1) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          div:nth-child(2) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          div:nth-child(3) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          div:nth-child(4) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          div:nth-child(5) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          div:nth-child(11) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }
          div:nth-child(12) ul {
            justify-content: space-evenly;
            padding: 0;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
          }

          li {
            list-style: none;
            margin: 4px;
            opacity: 1;
            color: #f9efe3;
            text-shadow: 2px 2px black;
          }

          h3 {
            color: #f9efe3;
            text-shadow: 2px 2px black;
          }

          `}</style>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;
