import React from 'react';

function App(){
  const name = 'inji'
  return (
    <React.Fragment>
      <h1>Hello! {name}</h1>
      <h1>😊:)</h1>
      {name && <h1>Hi</h1>}
      {
        ['🛺', '🏆'].map(item => (
          <h1>{item}</h1>
        ))}
    </React.Fragment>
    )
}

export default App;
