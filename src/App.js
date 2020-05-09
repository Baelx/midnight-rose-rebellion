import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/home/home-page.component'
import { ShopPage } from './pages/shop/shop-page.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
