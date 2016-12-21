import React from 'react';
import Container from '../components/Container';
import { Link, IndexLink } from 'react-router';

const Header = () => {

  return(
    <header>
      <Container>
        <h1>Danilo Prates</h1>
        <IndexLink to="/">Profile</IndexLink>
        <Link to="/work">Work</Link>
        <Link to="/info">Info</Link>
        <Link to="/contact">Contact</Link>
        {/*<button>Profile</button>
        <button>Work</button>
        <button>Info</button>
        <button>Contact</button>*/}
      </Container>
    </header>
  );
};

// Header.propTypes = {

// };

export default Header;
