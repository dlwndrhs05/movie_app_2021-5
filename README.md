# 이중곤 201930323

## 11월 3일

## 10월 27일

### 영화 앱 다듬기

#### 장르 추가
```javascript
//Movie.js
import react from "react";
import { ReactPropTypes } from "react";
//장르 props 추가
function Movie({title,year,summary,poster,genres}) {
    return (
    <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 class="movie__title">{titel}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    </div>
    );
}
Movie.PropTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arry0f(PropTypes.string).isRequired //장르 prop-type 추가
};
export default Movie;
```
  
App.js에도 컴포넌트를 추가하여 장르 props을 전달하도록 한다.
```javascript
//App.js
import React from "react";
import axios from "axios";
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () =>{
    const {
      data:{
        data:{movies},
      },
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log({ movies, isLoading: false });
  }
  componentDidMount (){
      this.getMovies();
  }
  render () {
    const { isLodading,movies } = this.state;
    return <section class="container">
      {isLoading ? (
        <div class="loader">
    <span class="loader__text">'Lodading...'</span>
    </div>
    ) : (
      <div class="movies">
        { movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres} //장르 컴포넌트 추가
          />
          ))}
          </div>
        )}
        </section>
  }
}
export default App;

```
Movie 컴포넌트에서 장르를 출력하도록 코드를 수정  
장르 props가 배열이기 떄문에 map() 함수를 사용하여 수정
```javascript
//Movie.js
import react from "react";
import { ReactPropTypes } from "react";

function Movie({title,year,summary,poster,genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{titel}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre) => {
                    return <li className="movie__genre">{genre}</li>;
                })}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
}
Movie.PropTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arry0f(PropTypes.string).isRequired
};

export default Movie;
```
출력은 잘되지만 콘솔을 확인하면 경고메세지가 나온다  
li엘리먼트에 key props를 추가하면 없어진다
```javascript
//Movie.js
import react from "react";
import { ReactPropTypes } from "react";

function Movie({title,year,summary,poster,genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{titel}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index) => {
                    return <li key={index} className="movie__genre">{genre}</li>;
                })}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
}
Movie.PropTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arry0f(PropTypes.string).isRequired
};

export default Movie;
```
#### 영화 앱 스타일링
css를 사용해서 앱을 스타일링한다  
우선 App.css 파일을 수정해서 영화 앱 전체에 적용한 글꼴,배경색을 적용한다.
```css
/* App.css */
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #eff3f7;
    height: 100%;
}
```
영화카드 모양으로 출력을 하려면 Movie.css를 수정하여 만든다
```css
/*Movie.css*/
.movies .movie{
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color:#adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px
    rgba(0, 0, 0, 0.3),0 -6px 16px -6px rgba(0,0,0,0.025);
}
.movies .movie a{
    display: grid;
    grid-template-columns: minmax(150px,1fr) 2fr;
    grid-gap:20px;
    text-decoration: none;
    color:inherit;
}
.movie img{
    position: relative;
    top:-50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3),
    0 -12px 36px -8px rgba(0,0,0,0.025);
}
.movie .movie__title {
    margin-bottom:5px;
    font-size: 24px;
    color: #2c2c2c;
}
.movie .movie__genres {
    list-style: none;
    padding:0;
    margin :0;
    display:flex;
    flex-wrap:wrap;
    margin:5px 0px;
}
.movie__genres li,
.movie .movie__year{
    margin-right: 10px;
    font-size: 14px;
}
```
#### slice()함수를 사용하여 문자열 제한
```javascript
//Movie.js
import PropTypes from 'prop-types';
import './Movie.css';
function Movie({title,year,summary,poster,genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index) => {
                    return <li key={index} className="movie__genre">{genre}</li>;
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    );
}
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
```
### 영화앱에 여러기능 추가하기

#### react-router-dom 설치후 프로젝트 폴더 정리
화면이동을 시키는 내비게이션 기능을 추가할 예정이다  
화면을 이동시켜주려면 라우터라는 장치가 필요하다  
라우터 설정을 위해 react-router-dom을 먼저 설치한다.
```javascript
//터미널
//react-router-dom 설치
>npm install react-router-dom
```
src폴더안에 컴포넌트 역할에 맞는 components 폴더와 라우터역할을 해줄 routes 폴더를 만든다  
내비게이션에 Home,About 메뉴를 만들 예정이므로 각 각 Home.js About.js 파일을 생성한다  
Home.js 파일에 작성할 코드는 App.js 파일의 코드를 그대로 복사하면 된다.  
```javascript
//Home.js
import React from "react";
import axios from "axios";
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () =>{
    const {
      data:{
        data:{movies},
      },
     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log({ movies, isLoading: false });
  }
  componentDidMount (){
      this.getMovies();
  }
  render () {
    const { isLoading,movies } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">'Loading...'</span>
        </div>
        ) : (
        <div className="movies">
          { movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            ))}
            </div>
          )}
          </section>
  
  }
}
export default Home;
```
마찬가지로 Home.js에 쓰일 Home.css를 만들어야한다
```css
/*Home.css*/
.container{
    height:100%;
    display:flex;
    justify-content:center;
}
.loader{
    width: 100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items:center;
    font-weight:300;
}
.movies{
    display:grid;
    grid-template-columns: repeat(2,minmax(400px,1fr));
    grid-gap: 100px;
    padding:50px;
    width: 80%;
    padding-top: 70px;
}

@media screen and(max-width: 1090px){
    .movies {
        grid-template-columns: 1fr;
        width: 100%;
    }
} 
```
App.js를 수정후 잘 작동하는지 확인해 보자
```javascript
//App.js
import React from 'react';
import Home from './routes/Home';
import './App.css'

function App(){
  return <Home />;
}

export default App;

```
#### 라우터 만들어 보기
라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러와 준다.  
react-router-dom은 여러 종류의 라우터를 제공하는데 그중 HashRouter와 Route 컴포넌트를 사용할 예정이다.
```javascript
//App.js
import React from 'react';
import './App.css'
import{HashRouter, Route} from 'react-router-dom';

function App(){
  return (
    <HashRouter>
      <Route/>
    </HashRouter>
  );
}

export default App;
```
About 컴포넌트를 임포트후 path,component props에 URL과 About컴포넌트를 전달하게한다.
```javascript
//App.js
import React from 'react';
import './App.css'
import{HashRouter, Route} from 'react-router-dom';
import About from './routes/About';

function App(){
  return (
    <HashRouter>
      <Route path="/about" component={About}/>
    </HashRouter>
  );
}

export default App;
```
About.js에 연결했으니 About.js도 수정해주자
```javascript
//About.js
import React from "react";

function About() {
    return <span>About this page: I built it because I love movies.</span>;
}

export default About;
```
라우터의 동작을 자세히 알아보기 위해   
Home,About 컴포넌트는 잠시 제외하고 아래와 같이 라우터를 재구성하고 라우터의 동작을 알아보자
```javascript
//App.js
import React from 'react';
import './App.css'
import{HashRouter, Route} from 'react-router-dom';
import About from './routes/About';

function App(){
  return (
    <HashRouter>
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
```
라우터는 사용자가 /home/introduction에 접속하면  
/,/home,/home/introduction 순서로 path props가 있는지 찾는다  
경로중에 해당하는 컴포넌트가 있으면 모두 표시를 한다  

Home 컴포넌트도 연결하고 테스트 하기
```javascript
//App.js
import React from 'react';
import './App.css'
import{HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App(){
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  );
}

export default App;
```
## 10월 13일

### 영화 API 사용해보기
영화 데이터를 로딩하려면 자바스크립트의 fetch() 라는 함수가 필요하다  
대신 우리는 axios라는 도구를 사용할것이다.  


axios 설치
```javascript
> npm install axios
```
사용한 APi  
[노마드 코더 깃허브](https://github.com/serranoarevalo/yts-proxy)  

API를 영화 앱에서 호출
```javascript
import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount (){
   axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
  render () {
    const { isLodading } = this.state;
    return <div>{isLoading ? 'Lodading...' : 'We are ready'}</div>;
  }
}
export default App;
```
axios는 네트워크를 사용해서 느리게 동작한다   
그러므로 axios.get()을 포함하고 있는 함수의 실행이 끝날 때까지 시간이 걸릴수 있도로 알게만들어야한다.  
```javascript
import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  //getMovies 함수추가
  getMovies = () =>{
    //axios.get이 반환한 값을 movies 에 저장
    const movies = axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
  componentDidMount (){
      this.getMovies();
  }
  render () {
    const { isLodading } = this.state;
    return <div>{isLoading ? 'Lodading...' : 'We are ready'}</div>;
  }
}
export default App;

```

## 9월 29일

### 번외 Master branch main branch로 변경

Black Lives Matter 운동에 발맞춰 주공관계를 뜻하는 'master','slave'를 다른 단어로 대체하기 위해 Master를 main으로 바뀌고 있다  

Git 2.28v 부터 사용자가 기존의 master로 지정되 있던 기본 브랜치를 설정을 통해 변경 할 수 있게 되었다.  

우선 Git의 버전이 2.28이상인지 확인학 config를 확인한다  
우선 순위는 Local>Global>System 순이며 Local 설정 파일이 제일 높다
+ System 설정 파일 확인: git config --system --list
+ Global 설정 파일 확인: git config --global --list
+ Local 설정 파일 확인: git config --local --list
+ 모든 설정 확인:git config --list
설정이 끝날시 새로 생성하는 저장소부터 적용이 된다  

기존브랜치 변경  
+ git branch -m master main
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
    hello react+
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

#### key props
리액트는 컴포넌트가 서로 다르다는 걸 알 방법이 없기 때문에  
직접 키값을 줘서 리액트에게 컴포넌트가 다르다는 것을 알려줘야한다.
```javascript
//key props 추가
function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>
  );
}
const foodLike = [
  {
    id:1,
    name: 'Kimchi'
  },
  {
    id:2,
    name: 'Samgyeopsal'
  },
  {
    id:3,
    name: 'Bibimbap'
  },
  { 
    id:4,
    name: 'Doncasu'}
  ,
  { 
    id:5,
    name: 'Kimbap'
  },
];

function renderFood(dish){
   return <Food key={dish.id}name={dish.name} picture={dish.image} />;
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
이미지를 추가할때 alt속성을 추가하지않으면 경고메세지를 준다
```javascript
//alt 속성 추가
function Food({name,picture}){
  return (<div>
    <h2>I like {name} alt={name}</h2>
    <img src={picture} />
    </div>
  );
}
```

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