import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import BusinessRentals from './components/BusinessRentals'
import CarSales from './components/CarSales'
import Make from './components/Make'
import CustomerCare from './components/CustomerCare'
import Signin from './components/Signin'
import Register from './components/Register'
import Products from './components/Products'
import ProductSingle from './components/ProductSingle'
import Footer from './components/Footer'


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/businessrentals" component={BusinessRentals}></Route>
          <Route path="/carsales" component={CarSales}></Route>
          <Route path="/make/:make" component={Make}></Route>
          <Route path="/customercare" component={CustomerCare}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/product/:id" component={ProductSingle}></Route>
          <Route render={() => <Redirect to="/"/>} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
