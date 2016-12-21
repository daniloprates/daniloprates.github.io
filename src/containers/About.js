import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import Page from '../components/Page';

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page
        name="About"
      >
        <Container>
          <p>Blah!</p>
        </Container>
      </Page>
    );
  }
}

About.propTypes = {
  className: PropTypes.string,
};


export default About;
