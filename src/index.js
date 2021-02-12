import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Schedule from './Schedule'; // Temporarily removed as site is restricted
// import Venue from './Venue'; 
import Travel from './Travel';
import Photos from './Photos';
import Menu from './Menu';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/> 
        {/* <Route path="/schedule" component={Schedule}/> */}
        {/* <Route path="/venue" component={Venue} /> */}
        <Route path="/travel" component={Travel} />
        <Route path="/photos" component={Photos} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
