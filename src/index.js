import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Schedule from './Components/Schedule';
import Venue from './Components/Venue'; 
import Travel from './Components/Travel';
import Photos from './Components/Photos';
import Menu from './Components/Menu';
import Registry from './Components/Registry';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/> 
        <Route path="/schedule" component={Schedule}/>
        <Route path="/venue" component={Venue} />
        <Route path="/travel" component={Travel} />
        <Route path="/photos" component={Photos} />
        <Route path="/menu" component={Menu} />
        <Route path="/registry" component={Registry} />
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
