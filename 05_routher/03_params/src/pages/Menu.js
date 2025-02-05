/* /menu 요청이 들어오면 보여 줄 페이지 */
import boxStyle from './Menu.module.css';
import{useEffect,useState} from 'react';
import{getMenuList} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';

function Menu() {

    const[menuList , setMenuList] = useState([]);

    //마운트 시점에 동장(메뉴 전체 조회)
    useEffect(()=>{
        /* 
            Menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와
            state 에 담아 줄 것이다.    
        */
        setMenuList(getMenuList());
    },[])
    

    return(
        <>
            <h1>하이미디어 레스토랑 메뉴!!</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu =><MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default Menu;