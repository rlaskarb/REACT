/* 공용으로 사용할 헤더 컴포넌트 */
// import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

/*
    NavLink 는 Link 와 사용 방법은 거의 유사하다.
    차이점은 현재 Nav 의 상태가 active 인지에 대한 값을
    사용할 수 있어 스타일 조작하거나 클래스 이름변경 등의 추가적인 기능을 수행할 수 있다.
*/

function Navbar(){

    const activeStyle = {
        backgroundColor : 'red',
        border : 1
    }

    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive})=>isActive ? activeStyle : undefined}>Main</NavLink></li>
                <li><NavLink to="/menu" style={({isActive})=>isActive ? activeStyle : undefined}>Menu</NavLink></li>
                <li><NavLink to ="/about" style={({isActive})=>isActive ? activeStyle : undefined}>About</NavLink></li>
                <li><NavLink to ="/mypage" style={({isActive})=>isActive ? activeStyle : undefined}>Mypage</NavLink></li>
                
            </ul>
        </div>
    );
}

export default Navbar;