import React from 'react';
import Weather from './components/Weather';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/App.css';



const App = () => {
  return (
    <div className="container">
      <Weather />
    </div>
  )
};

export default App;
