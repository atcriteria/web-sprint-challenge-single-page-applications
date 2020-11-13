import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Form from './Form';

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/pizza">
        <Form />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
};
export default App;
