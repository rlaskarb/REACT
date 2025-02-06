import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getSearchMenu} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';
import boxStyle from './Menu.module.css';

function MenuSearchResult(){
    const [searchParam] = useSearchParams();
    const [menuList,setMenuList] = useState([]);
    const menuName = searchParam.get('menuName');
    //menuName 값을 검색하고 결과를 menuList 를 상태 변수에 저장을 합니다.

    useEffect(()=>{setMenuList(getSearchMenu(menuName));},[]);
    // menuName 이 변경될 때마다 해당하는 메뉴를 가져옵니다.

    return(
        <>
            <h1>검색 결과!!</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );

}

export default MenuSearchResult;