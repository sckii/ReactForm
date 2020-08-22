import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import List from './pages/List';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={List} />
    </BrowserRouter>
  );
}

export default App;
