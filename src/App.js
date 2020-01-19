import React from 'react';
import './App.css';
import Hello from './Hello'
import HelloStateless from './HelloStateless'
import StateFullBtn from './StateMaintain/StateFullBtn'
import Counter from './Counter/Counter'

function App() {
  return (
    <div className="App">
      <Hello name="Garima"/>
      <HelloStateless name="Anisha" info="Also, I am trying to use small example of destructuring. It is an ES6 feature." />
      <StateFullBtn />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
