import React from 'react';
import Container from '../components/Container';
import { Link, IndexLink } from 'react-router';

const Header = () => {

  return(
    <header>
      <Container>
        <h1>Danilo Prates</h1>
        <nav>
          <IndexLink to="/" className="profile" activeClassName="header-selected" >Profile</IndexLink>
          <Link to="/work" className="work" activeClassName="header-selected" >Work</Link>
          <Link to="/info" className="info" activeClassName="header-selected" >Info</Link>
          <Link to="/contact" className="contact" activeClassName="header-selected" >Contact</Link>
        </nav>
      </Container>
    </header>
  );
};

// Header.propTypes = {

// };

export default Header;
