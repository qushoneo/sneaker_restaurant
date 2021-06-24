import "./App.css";
import Header from "./navbar/Header";
import Shoes from "./shoes/Shoes";
import styled from "styled-components";
import Releases from "./releases/Releases";
import Container from "./shoes/Shoes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/shoes">
            <Shoes />
          </Route>
          <Route path="/releases">
            <Releases />
          </Route>
          <Route path="*">
            <Redirect to="/shoes" push={true} />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
