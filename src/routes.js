import React from 'react';
import { Route, IndexRoute } from 'react-router';

import About from './containers/About.js';
import Work from './containers/Work.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="work" component={Work}/>
    <Route path="*" component={About}/>
  </Route>
);
