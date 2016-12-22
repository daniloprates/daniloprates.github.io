import React, { Component, PropTypes } from 'react';
import Container from '../components/Container';
// import Page from '../components/Page';

class About extends Component {

  constructor(props) {
    super(props);
    this.opacity = 0;
    this.state = {
      style: {
        opacity: 0,
        marginLeft: '-50px'
      }
    };
  }

  componentWillMount() {
    this.setState({
      style: {
        opacity: 0,
        marginLeft: '50px'
      }
    });
    setTimeout(()=>{
      this.setState({
        style: {
          opacity: 1,
          marginLeft: 0
        }
      });
    },500);
  }

  render() {
    return (
      <div
        className={`page`}
        style={this.state.style}
        >
        <Container>
          <div
            className="about-content full-height"
            style={{
              height: window.outerHeight,
              paddingTop: '155px'
            }}
          >
            <p>Front-end developer with over eight years of experience, with special interest in the React ecosystem. Eagle eye for details acquired from the Advertisement BA degree and 4 years working as a web and graphic designer. Passion for building great user interfaces and experiences. Flexible with working environments having positioned for small creative studios in London, the largest website in Brazil and fortune 500 companies in USA. Currently looking for a permanet remote position.</p>
          </div>
          <div className="about-bottom">
            <ul>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

About.propTypes = {
  className: PropTypes.string,
};


export default About;
