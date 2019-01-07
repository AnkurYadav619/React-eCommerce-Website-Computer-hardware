import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Cart from './components/Cart';
import ShowProduct from './components/ShowProduct';



import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/products/:id" component={ShowProduct} />


      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));

serviceWorker.unregister();
