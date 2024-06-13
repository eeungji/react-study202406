
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Bye from './components/Bye';
import Greet from './components/Greet';
// App 이라는 이름으로 태그들이 묶여있음.
// 컴포넌트라고 부름 태그들을 묶어놓고 있음. (재사용 가능한 코드의 묶음)

function App() {

  // jsx 문법
  // const $h2 = React.createElement('h2', null, '방가방가햄토리');
  const $h2 = <h2>방가방가햄토리</h2>;

  // jsx 규칙
  // 1. return안에 있는 태그는 반드시 하나의 태그로 묶어야 함.
  // 2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감
  // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  // 자바스크립트 랜더링 될 때는 className이 브라우저에서 class로 바뀌어서 랜더링됨.
  // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨

  const hello = '안녕안녕?';
  return (
    <>
      <Bye />
      <Hello />
      <Bye />
      <Greet />
    </>
  );
}

export default App;




// return은 태그 여러개 보낼 수 없음.
// 형제 태그가 있는 경우 반드시 부모태그 하나로 감싸줘야 함