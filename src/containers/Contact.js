import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import Page from '../components/Page';

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page
        name="Contact"
      >
        <Container>
          <p>Blah!</p>
        </Container>
      </Page>
    );
  }
}

Contact.propTypes = {
  className: PropTypes.string,
};


export default Contact;
