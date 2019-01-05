import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';

import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>



      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));

serviceWorker.unregister();
