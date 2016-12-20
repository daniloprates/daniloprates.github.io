import React, { Component, PropTypes } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Contact</div>
    );
  }
}

Contact.propTypes = {
  className: PropTypes.string,
};


export default Contact;
