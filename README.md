# 이중곤 201930323

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