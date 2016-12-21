import React from 'react';
import Container from '../components/Container';
import { Link, IndexLink } from 'react-router';

const Header = () => {

  return(
    <header>
      <Container>
        <h1>...</h1>
        <nav>
          <IndexLink to="/" className="profile">Profile</IndexLink>
          <Link to="/work" className="work">Work</Link>
          <Link to="/info" className="info">Info</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
};

// Header.propTypes = {

// };

export default Header;
