import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

/*
    Outlet
    react-router-dom 에서 제공하는 기능으로서
    라우팅 된 컴포넌트를 렌더링 하는 컴포넌트 이다.
    중첩 라우팅을 적용할때 사용하게되며 url 주소에 따라서 
    자식 컴포넌트를 렌더링 하는 역활을 한다.
*/

function Layout (){
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;

// Header , Navbar 를 포험하는 기본 레이아웃을 정의합니다.