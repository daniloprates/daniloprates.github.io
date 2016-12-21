import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';

const App = (props) => {

  let currentRoute = location.pathname.replace('/','') || 'profile';

  document.body.className = currentRoute;

  return (
    <div className={`app ${currentRoute}`}>
      <Header />
      <Container>
        <h2>{currentRoute}</h2>
      </Container>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
