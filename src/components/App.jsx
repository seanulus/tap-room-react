import React from 'react';
import HomePage from './HomePage';
import BeersList from './BeersList';
import HoursList from './HoursList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx>{`
          background-color: black;
          height: 1000px;
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hours' component={HoursList} />
        <Route exact path = '/beers' component={BeersList} />
      </Switch>
    </div>
  );
}

export default App;
