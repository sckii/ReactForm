import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Register from './pages/Register';
import List from './pages/List';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={List} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
