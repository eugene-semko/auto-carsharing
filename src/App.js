import React from 'react'
import './App.css';
import Menu from './menu/Menu'
import CarsReview from './CarsReview/CarsReview'
import AddReview from './AddReview/AddReview'
import Rating from './Rating/Rating'
import Registration from './Registration/Registration'
import FillProfile from './Registration/FillProfile'
import Profile from './Profile/Profile'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path = '/' component = {CarsReview}/>
        <Route path = '/cars' component = {CarsReview}/>
        <Route path = '/review' component = {AddReview}/>
        <Route path = '/peoples' component = {Rating} />
        <Route path = '/registration' component = {Registration} />
        <Route path = '/fill-profile' component = {FillProfile} />
        <Route path = '/profile' component = {Profile} />
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
