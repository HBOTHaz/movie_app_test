import React from 'react';


import Example from "./Example";
// on this Example is not using here 
// ./(filename) = in same directory

function App() {
  return (
    <div className="App">
      <h1>Wow, did i do this?</h1>
    </div>
  );
}

/* we can use like this, but it cause confuse.

function App() {
  return (
    <div className="App">
      <h1>Wow, Did i do this?</h1>
      <Example />
    </div>
  );
}

*/

export default App;
