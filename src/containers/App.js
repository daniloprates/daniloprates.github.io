import React, { PropTypes } from 'react';
import Header from '../components/Header';
// import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
