import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import * as yup from "yup";
import schema from './schema';
import Header from './Header';
import Home from './Home';
import Form from './Form';
import { values } from "cypress/types/lodash";

const initialValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  instruction: ""
};

const initialFormErrors = {
  name: "",
  size: "",
  instruction: ""
}

const App = () => {
  const [order, setOrder] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
    setOrder({
      ...order,
      [name]: value,
    });
  };

  return (
    <>
    <Header />
    <Switch>
      <Route path="/pizza">
        <Form values={order} change={inputChange}/>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
};
export default App;
