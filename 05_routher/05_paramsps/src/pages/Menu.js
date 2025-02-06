import {useEffect, useState} from 'react';
import {getMenuList} from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';
import {useNavigate} from 'react-router-dom';
import boxStyle from './Menu.module.css';

// useEffect , useState 를 사용하여 상태를 관리하고  API 데이터를 가져옵니다.
// useNavigate 를 사용하여 검색 버튼 클릭 시 페이지를 이동합니다.

function Menu(){
    const[ menuList , setMenuList] = useState([]);
    const[searchValue , setSearchValue] = useState('');
    const navigate = useNavigate();
    // menuList 는 메뉴목록을 저장하는 상태 변수입니다.
    // searchValue 는 검색 입력값을 저장합니다.

    //마운트 시점에 동작!(전제메뉴 조회)
    useEffect(()=>{setMenuList(getMenuList());},[]);
    // Menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와 State에 담아 줄 것이다.
    // 페이지가 처음 렌더링 될때 getMenuList() 를 호출하여 데이터를 가져옵니다.


    const changeHandler = e => setSearchValue(e.target.value);
    // 검색하기 버튼을 눌르면 다른 페이지로 검색결과를 보여줄 것이다.
    const clickHandler = () => {navigate(`/menu/search?menuName=${searchValue}`)};
    // 우리가 관리하는 값 쿼리스트링으로 전달한다.

    // changeHandler 는 입력값을 업데이트 합니다.
    // clickHandler 는 검색 결과 페이지로 이동합니다.

    return(
        <>
        <h1> 돈주고 가고 싶지 않는 레스토랑 메뉴! </h1>
        <div>
            <input type='search' name='menuName' onChange={changeHandler}/>
            <button onClick={clickHandler}>메뉴 이름검색!</button>
        </div>
        <div className={boxStyle.MenuBox}>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )

}


export default Menu;