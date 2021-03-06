import React, { useState } from "react";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Toppings from "./components/Toppings";
import { AnimatePresence } from "framer-motion";
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
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings
              addTopping={addTopping}
              pizza={pizza}
            />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
