import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
import Page from '../components/Page';

class Work extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page
        name="Work"
      >
        <Container>
          <p>Blah!</p>
        </Container>
      </Page>
    );
  }
}

Work.propTypes = {
  className: PropTypes.string,
};


export default Work;
