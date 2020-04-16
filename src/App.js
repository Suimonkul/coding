import React from 'react';
import './App.css';
import Card from "./new_page"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route path="/new_page" component={Card}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
