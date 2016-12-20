import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import About from './containers/About.js';
import Work from './containers/Work.js';
import Plus from './containers/Plus.js';
import Contact from './containers/Contact.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="work" component={Work}/>
    <Route path="plus" component={Plus}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={About}/>
  </Route>
);
