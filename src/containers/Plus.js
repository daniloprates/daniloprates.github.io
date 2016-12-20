import React, { Component, PropTypes } from 'react';

class Plus extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Plus</div>
    );
  }
}

Plus.propTypes = {
  className: PropTypes.string,
};


export default Plus;
