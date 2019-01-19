import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Accessories from './components/Accessories';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Cart from './components/Cart';
import Graphics from './components/Graphics';
import Monitor from './components/Monitor';
import NewProducts from './components/NewProducts';
import ShowProduct from './components/ShowProduct';
import Specials from './components/Specials';
import Storage from './components/Storage';
import Faq from './components/Faq';
import Form from './components/Contact'
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/graphics" component={Graphics}/>
        <Route path="/storage" component={Storage}/>
        <Route path="/monitor" component={Monitor}/>
        <Route path="/newProducts" component={NewProducts}/>
        <Route path="/specials" component={Specials}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/contact" component={Form}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));

serviceWorker.unregister();
