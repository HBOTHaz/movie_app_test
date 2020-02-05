import React from 'react';

 // JSX의 개념 이해

import Example from "./Example";
// on this Example is not using here 
// ./(filename) = in same directory

// 함수를 설정해 틀은 같고 일부 내용만 다른 HTML을 작성 가능
// {fav} == props.fav
// 컴포넌트는 대문자로 시작할 것
// fav 와 같은 내용은 자유롭게 작성 가능
function TextMessage({fav, pic}) {
  return <div>
    <p>Title: {fav}</p>
    <img src={pic} alt={fav}/>
    </div>
}

// 동적인 데이터를 위한 테스트
const Dynamic = [
  {
    id: 1,
    name: "Testboard1",
    image: "https://images.unsplash.com/photo-1579509609985-460f8e833e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Testboard2",
    image: `..\images\board2.png`
  },
  {
    id: 3,
    name: "Testboard3",
    image: "images/board3.png"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Wow, did i do this? so i can use this?</h1>
      <TextMessage fav="Test1"/>
      <TextMessage fav="Test2"/>
      <TextMessage fav="Test3"/>
      {Dynamic.map(item => <TextMessage key={item.id} fav={item.name} pic={item.image}/> )}
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
