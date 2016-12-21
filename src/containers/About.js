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

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at pretium lectus, id dapibus augue. Praesent leo turpis, tempor vitae lobortis consequat, lobortis in felis. Aliquam non ipsum molestie, ullamcorper purus a, feugiat mi. In sed elit nec elit faucibus fringilla. Maecenas scelerisque lectus augue, eu faucibus sem tincidunt quis. Vestibulum elementum augue vel tellus maximus, at dictum felis fringilla. Proin venenatis, ante id lobortis auctor, nulla tellus malesuada erat, quis euismod turpis mi at elit. Duis consequat semper augue non lacinia. Suspendisse ultricies, mi id cursus vulputate, enim mi placerat dolor, porta feugiat felis eros sed tellus. Mauris a eleifend ex. Sed erat sapien, imperdiet non velit sed, suscipit tincidunt diam.</p>
              <p>Duis eu ligula vel mi semper rhoncus et quis sem. Ut ac dolor orci. Donec non scelerisque nunc. Etiam aliquam sodales erat sed vestibulum. Proin vel consequat odio, ut luctus neque. Nulla id tortor convallis dui scelerisque malesuada. Vestibulum rhoncus sodales enim, eu rhoncus libero bibendum ac. In condimentum orci non tincidunt dignissim. Phasellus suscipit justo nulla. Praesent fringilla in ex congue sagittis. Vivamus vel quam felis. Quisque congue sem sit amet mi varius, laoreet ornare risus egestas. Suspendisse sem neque, luctus at commodo eu, pharetra sit amet dui. Pellentesque aliquet rhoncus urna non scelerisque.</p>
              <p>Nam viverra non magna in faucibus. Integer commodo tellus eu metus aliquet bibendum. Mauris libero est, porta quis faucibus ut, lobortis sed nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet consequat lectus. Phasellus gravida, sem ut elementum blandit, ante tortor hendrerit augue, a fermentum diam augue nec felis. Mauris ac elit nec felis malesuada condimentum ut a nulla. Proin et massa sit amet orci ultrices rutrum sit amet quis ex.</p>
              <p>Nulla rutrum pretium mauris, eu consectetur purus malesuada id. Donec sed elementum lorem. Pellentesque feugiat eros nisl, eget pulvinar mi sollicitudin sed. Integer ullamcorper, arcu vel feugiat cursus, risus tellus iaculis diam, maximus molestie sapien nibh et tellus. Aliquam lacinia sem vitae tincidunt bibendum. Aliquam tincidunt id erat dictum lobortis. Nam in lorem at erat mattis ullamcorper ut ut tellus. Aenean laoreet massa non est dapibus, commodo posuere eros consectetur. Aenean non neque sed magna semper venenatis fermentum eget metus. Maecenas non lacinia velit. Donec eu velit nec ipsum pretium vestibulum. Cras sed tincidunt arcu. In viverra condimentum iaculis. Suspendisse potenti.</p>
              <p>In dolor ante, iaculis quis metus quis, feugiat rhoncus tellus. Aenean iaculis, ex id rutrum vulputate, dolor arcu egestas odio, ac consectetur dui ipsum non tellus. Cras ac massa quis nisl consectetur congue ac et lorem. Vestibulum tempus dui vel lorem pretium consectetur. Aenean orci nisi, auctor ac pellentesque sit amet, tincidunt et nisi. Ut ornare, tortor quis lacinia vulputate, neque ex feugiat quam, vitae blandit massa risus et sem. Vivamus quis sem tincidunt, maximus felis sit amet, placerat massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

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
