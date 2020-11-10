import React from 'react';
import PropTypes from 'prop-types';
import Index from './Index';

const Indices = ({ selectedIndex, setIndex }) => {
  const alphas = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  console.log(alphas);


  return (
    <div>
      {alphas.map((letter, index) => (
        <Index
          key={index}
          letter={letter}
          selected={letter === selectedIndex ? true : false}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
};

Indices.propTypes = {
  selectedIndex: PropTypes.string.isRequired,
};

Indices.defaultProps = {
  selectedIndex: '',
};

export default Indices;
