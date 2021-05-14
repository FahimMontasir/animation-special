import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";

function App() {
  const [pizza, setPizza] = useState({
    base: "",
    toppings: [],
  });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(
        (item) => item !== topping
      );
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
