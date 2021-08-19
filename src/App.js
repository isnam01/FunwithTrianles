import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Triangle from "./components/Triangle";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import Area from "./components/Area";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/triangle" exact={true}>
            <Triangle />
          </Route>
          <Route path="/quiz" exact={true}>
            <Quiz />
          </Route>
          <Route path="/hypotenuse" exact={true}>
            <Hypotenuse />
          </Route>
          <Route path="/area" exact={true}>
            <Area />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
