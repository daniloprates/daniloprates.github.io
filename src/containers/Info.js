import React, { Component, PropTypes } from 'react';

class Info extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Info</div>
    );
  }
}

Info.propTypes = {
  className: PropTypes.string,
};


export default Info;
