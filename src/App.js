import React from 'react';
import PropTypes from "prop-types";

// npm start를 통해 실시간으로 보면서 코딩이 가능함

// JSX의 개념 이해

// import Example from "./Example";
// on this Example is not using here 
// ./(filename) = in same directory

// 함수를 설정해 틀은 같고 일부 내용만 다른 HTML을 작성 가능
// {fav} == props.fav
// 컴포넌트는 대문자로 시작할 것
// fav 와 같은 내용은 자유롭게 작성 가능



/* 하드코딩한 데이터, 주석처리
function TextMessage({fav, pic, rat}) {
  return <div>
    <p>Title: {fav}</p>
    <img src={pic} alt={fav}/>
    <p>Rate: {rat}</p>
    </div>
}

// string, number, boolean, function 등으로 제대로 입력됐는지 검사 가능
// propTypes는 절대 다른 이름으로 적어선 안됨
TextMessage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

// 동적인 데이터를 위한 테스트
const Dynamic = [
  {
    id: 1,
    name: "Testboard1",
    image: "https://images.unsplash.com/photo-1579509609985-460f8e833e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    rating: 5
  },
  {
    id: 2,
    name: "Testboard2",
    image: `..\images\board2.png`,
    rating: 3
  },
  {
    id: 3,
    name: "Testboard3",
    image: "images/board3.png",
    rating: 4
  }
];

function App() {
  return (
    <div className="App">
      <h1>This is Title.</h1>
      <TextMessage fav="Test1"/>
      <TextMessage fav="Test2"/>
      <TextMessage fav="Test3"/>
      {Dynamic.map(item => <TextMessage key={item.id} fav={item.name} pic={item.image} rat={item.rating}/> )}
    </div>
  );
}

*/

// 필수 작성해야 하는 부분
// state는 object임을 기억할 것
class App extends React.Component {
  state = {
    count: 0
  }
  // setState를 쓰지 않으면 리액트는 제대로 호출되지 않음
  // this.setState({ count: this.state.count + 1 }) 이와 같은 방식은 추천하지 않음
  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  };
  render() {
    return <div>
      <h1>Im ClassComponent, and number is {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }

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
