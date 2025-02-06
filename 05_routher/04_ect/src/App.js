import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layouts/layout';
import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';
import Error404 from './errors/Error404';
import Mypage from './errors/Mypage';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Layout/>}>
   <Route index element={<Main/>}/>
   <Route path='main' element={<Main/>}/>
   <Route path='menu' element={<Menu/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='mypage' element={<Mypage/>}/>
   </Route>
   <Route path='*' element={<Error404/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
