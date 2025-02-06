import itemStyle from './MenuItem.module.css';
import {NavLink} from 'react-router-dom';
//css 모듈과 NavLink 를 불러옵니다.

function MenuItem({menu}){
    return(
        <NavLink to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.MenuItem}>
                <h3>메뉴이름 : {menu.menuName}</h3>
                <h3>메뉴가격 : {menu.menuPrice}</h3>
                <h3>메뉴종류 : {menu.categoryName}</h3>
            </div>
        </NavLink>
    );
}

export default MenuItem;

// 메뉴를 클릭하면 해당 메뉴의 상세페이지 /menu/{menuCode} 로 이동합니다.