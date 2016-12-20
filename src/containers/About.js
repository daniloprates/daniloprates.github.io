import React, { Component, PropTypes } from 'react';

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello Mondo</div>
    );
  }
}

About.propTypes = {
  className: PropTypes.string,
};


export default About;
