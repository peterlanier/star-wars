import { useState } from 'react'
import Navbar from './Navbar'
import Planets from './Planets'
import People from './People'
import { Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/people">
            <People />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
