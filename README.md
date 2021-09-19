# 이중곤 201930323
## 9월 15일

#### JSX

JSX는 HTML과 JS를 조합하여 만든다
```javascript
//JSX로 만든 컴포넌트
function Potato(){
  return <h3>I love potato</h3>;
}
```
컴포넌트는 자바의 클래스 처럼 하나의 클래스안에 여러개를 만들수도 있고  
여러개의 컴포넌트를 만들어 임포트로 관리할 수 있다.
#### props
props는 컴포넌트에서 컴포넌트로 전달하는 데이터를 말하며 함수의 매개변수하고 비슷하다.  
props에는 boolean,숫자,배열과 같은 다양한 형태의 데이터를 담을 수 있다.  
단 props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호({})로 값을 감싸야 한다.
```javascript
function Food(){
  return <h3>I love potato</h3>;
}

function App() {
  return (
    //props에 있는 데이터가 문자열이 아닐경우 중괄호({})로 감싼다
  <div>
    hello react
    <Food fav="kimchi" something={true} papapapa={['hello',1,2,3,4,true]}/> 
  </div> ); 
  
}

export default App;

```
```javascript
//JS의 구조분해할당을 활룡한 Props
function Food({fav}){
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
  <div>
    hello react
    <Food fav="kimchi"/>
  </div> );
  
}

export default App;

```
```javascript
//여러개의 컴포넌트에 props 사용
function Food({fav}){
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
  <div>
    hello react
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="samgiopsal"/>
    <Food fav="chukumi"/>
  </div> );
  
}

export default App;
```
#### map() 함수 사용하기

```javascript
//서버에서 받을 데이터를 저장할수 있는 변수
const foodLike = [
  {name: 'Kimchi'},
  {name: 'Samgyeopsal'},
  {name: 'Bibimbap'},
  {name: 'Doncasu'},
  {name: 'Kimbap'},
];
//데이터 생성
```
map() 함수는 배열의 모든 원소 마다 특정 작업을 하는 함수를 적용하고  
그 함수가 반환한 결과를 모아서 배열로 반환한다.
```javascript
const friends = ["a","b","c"]

friends.map(foo => {
  console.log(foo);
  return 0;
})
//결과값
[0,0,0]
```
```javascript
//무명함수를 사용허가
const friends = ["a","b","c"]

friends.map(friends => {
  console.log(friends);
  return friends+ "♥";
})
//결과값
["a ♥","b ♥","c ♥"]
```
```javascript
//맵을 활용해 데이터를 출력
function Food({name}){
  return <h3>I like {name}</h3>;
}
const foodLike = [
  {name: 'Kimchi'},
  {name: 'Samgyeopsal'},
  {name: 'Bibimbap'},
  {name: 'Doncasu'},
  {name: 'Kimbap'},
];
function App() {
  return (
  <div>
    {foodLike.map(dish => (<Food name={dish.name}/>))}
  </div> 
  );
  
}

export default App;
```
```javascript
//컴포넌트에 이미지 출력
function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}
const foodLike = [
  {name: 'Kimchi'},
  {name: 'Samgyeopsal'},
  {name: 'Bibimbap'},
  {name: 'Doncasu'},
  {name: 'Kimbap'},
];
function App() {
  return (
  <div>
    {foodLike.map(dish => 
      (<Food name={dish.name} picture={dish.image}/>))}
  </div> 
  );
  
}

export default App;
```
```javascript
//map()함수의 인자로 함수전달하기
function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}
const foodLike = [
  {name: 'Kimchi'},
  {name: 'Samgyeopsal'},
  {name: 'Bibimbap'},
  {name: 'Doncasu'},
  {name: 'Kimbap'},
];

function renderFood(dish){
   return <Food name={dish.name} picture={dish.image} />;
}
function App() {
  return (
  <div>
    {foodLike.map(renderFood)}
  </div> 
  );
  
}

export default App;
```
console.log를 이용하여 map함수를 출력하면 콘솔 창에서
map함수가 반환한 리액트 컴포넌트를 볼수 있다.

## 9월 08일 

### 리액트 기초 개념
#### 리액트 생성 및 시작 삭제
보일러 플레이트  
```
터미널에서 create-react-app 프로젝트이름 
```
실행시 프로젝트가 생성된다

리액트 앱 실행
```
터미널에서 npm start
```
리액트 앱 종료
```
ctrl + c
```
#### 컴포넌트

```javascript
function App() { //App 컴포넌트를 정의
  return (
    <div>
        <h1>hello react</h1> 
    </div> 
    ); //App 컴포넌트는 HTML을 반환

}
```
```javascript
// index.js

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root')); // import App from './App',<App /> 부분이 App컴포넌트를 임포트하여 사용했다는 뜻

```
<App />을 ReactDOM.render()함수의 첫 번째 인자로 전달하여 App 컴포넌트가 반환하여 화면에 렌더를 함  
App 컴포넌트가 그려질 위치는 ReactDOM.render()함수의 두 번째 인자로 전달을 하면된다.

즉 ReactDOM.render()함수의 첫번째 인자는 js와 연결을 두번째 인자는  html에 연결되어 js에있는 컴포넌트를 html render 하는 역할을 한다.