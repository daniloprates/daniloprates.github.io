import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App.js';
import About from './containers/About.js';
import Work from './containers/Work.js';
import Info from './containers/Info.js';
import Contact from './containers/Contact.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="work" component={Work}/>
    <Route path="info" component={Info}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={About}/>
  </Route>
);
