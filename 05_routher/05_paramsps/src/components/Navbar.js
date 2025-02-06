import {NavLink} from 'react-router-dom';
// NavLink 를 사용하여 페이지 이동을 구현합니다.
/*
    NavLink 는 Link 와 사용 방법은 거의 유사하다.
    차이점은 현재 Nav 의 상태가 active(활성화) 인지에 대한 값을
    사용할 수 있어 스타일을 조작하거나 클래스 이름 변경 등의 추가적인
    수행할 수 있다.
*/


function Navbar(){

    const activeStyle = {
        backgroundColor : 'yellow',
        border : 1
        // 현재 선택된 링크에서 적용할 스타일을 지정합니다.
    };


    return(
    <div>
        <ul>
            <li><NavLink to="/" style={(isActive)=> isActive ? activeStyle : undefined}>메인!!</NavLink></li>
            <li><NavLink to="/menu" style={(isActive)=> isActive ? activeStyle : undefined}>메뉴!!</NavLink></li>
            <li><NavLink to="/about" style={(isActive)=> isActive ? activeStyle : undefined}>소개!!</NavLink></li>
        </ul>
    </div>
    );
    // isActive 가 true 이면 activeStyle 을 적용합니다.
}

export default Navbar;
