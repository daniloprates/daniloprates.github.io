import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';

const Page = (props) => {
  return (
    <div className={`page ${props.name}`}>
      {props.children}
    </div>
  );
};

Page.propTypes = {
  name: PropTypes.string
};

export default Page;
