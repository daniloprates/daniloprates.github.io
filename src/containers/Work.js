import React, { Component, PropTypes } from 'react';

class Work extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello Mondo</div>
    );
  }
}

Work.propTypes = {
  className: PropTypes.string,
};


export default Work;
