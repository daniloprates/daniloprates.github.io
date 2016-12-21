import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import Page from '../components/Page';

class Info extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page
        name="Info"
      >
        <Container>
          <p>Blah!</p>
        </Container>
      </Page>
    );
  }
}

Info.propTypes = {
  className: PropTypes.string,
};


export default Info;
