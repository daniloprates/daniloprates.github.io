import React from 'react';
import { Route, IndexRoute } from 'react-router';

<<<<<<< HEAD
import App from './containers/App';
import About from './containers/About';
import Work from './containers/Work';
import Info from './containers/Info';
import Contact from './containers/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="work" component={Work}/>
    <Route path="info" component={Info}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={About}/>
  </Route>
);
