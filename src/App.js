import React from 'react';
import './App.css';
import Navigationbar from './Navigationbar';
import Content from './Content';


const App = () => {

  // Use the ProtectedRoute for the Admin component
  return (
    <>
      <Navigationbar/>
      <Content/>
    </>
  );
}

export default App;
