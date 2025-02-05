import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';



function App() {

  /*
    최초 프로젝트 기본 설정
    프로젝트 만들고 싶은 폴더에 1.npx create-react-app ./
    이후 기본 세팅
    2. src 폴더에 App.js , index,js 빼고 지우기!
    3. App.js,index.js 에 불피로한 import 구문 , 코드지우기
    4. npm install react-router-dom@6 으로 의존성 추가


    라우팅이란? /menu/detail =<Detail/>


    react-router-dom 에서 제공하는

    BrowserRouter
    - 라우팅이 필요한 컴포넌트를 감싸는 컴포넌트

    Routes
    -Route 들을 묶어주는 단위

    Route
    -url 요청 주소와 컴포넌트를 매핑 해주는 단위위

  */

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/*<Route index element={<Main/>}/>*/}
        <Route path='/' element={<Main/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
