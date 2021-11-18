import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <header className={'App-header'}>
      <h2>{title}</h2>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
