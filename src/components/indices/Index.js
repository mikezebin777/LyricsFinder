import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ letter, selected, setIndex }) => {
  return (
    <div className={`index ${selected ? 'selected' : ''}`}
    onClick={() => setIndex(letter)}>
      <span>{letter}</span>
    </div>
  );
};

Index.propTypes = {
  letter: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIndex: PropTypes.func.isRequired,
};

Index.defaultProps = {
  selected: false,
};

export default Index;
