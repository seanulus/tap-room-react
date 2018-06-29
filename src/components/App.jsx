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
        
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hours' component={HoursList} />
        <Route path='/hours' component={BeersList} />
      </Switch>
    </div>
  );
}

export default App;
