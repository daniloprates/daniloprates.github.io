import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import About from './containers/About';
import Work from './containers/Work';
import Info from './containers/Info';
import Contact from './containers/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute page="About" component={About}/>
    <Route path="work" page="Work" component={Work}/>
    <Route path="info" page="Info" component={Info}/>
    <Route path="contact" page="Contact" component={Contact}/>
    <Route path="*" page="About" component={About}/>
  </Route>
);
