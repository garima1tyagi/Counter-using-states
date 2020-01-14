import React from 'react';
import './App.css';
import Hello from './Hello'
import HelloStateless from './HelloStateless'
import StateFullBtn from './StateMaintain/StateFullBtn'


function App() {
  return (
    <div className="App">
      <Hello name="Garima"/>
      <HelloStateless name="Anisha"/>
      <StateFullBtn />
    </div>
  );
}

export default App;
