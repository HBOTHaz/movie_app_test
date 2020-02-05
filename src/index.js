import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// HTML을 불러오는 기능, App.js 함수 App() 내의 내용을 그대로 HTML에 구현 (JSX 개념)
// Just Only one rendering. and the one is <App />
// so I can't type next to <App />. like <App /><Example />. it's not work.