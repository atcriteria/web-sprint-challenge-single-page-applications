import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import * as yup from "yup";
import schema from './schema';
import Header from './Header';
import Home from './Home';
import Form from './Form';

const initialValues = {
  name: "",
  portion: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  instructions: ""
};

const initialFormErrors = {
  name: "",
  portion: "",
}

const initialDisabled = true;

const App = () => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      portion: formValues.portion,
      instructions: formValues.instructions,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      topping5: formValues.topping5,
      topping6: formValues.topping6,
    };
    setOrder(newOrder);
  }

  return (
    <>
    <Header />
    <Switch>
      <Route path="/pizza">
        <Form
        values={formValues}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
        submit={formSubmit}
        />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
};
export default App;
