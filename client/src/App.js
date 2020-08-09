import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  useEffect(() => {
    
    axios.get("/api/config").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
