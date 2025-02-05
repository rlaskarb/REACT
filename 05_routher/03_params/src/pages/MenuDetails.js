import {useState , useEffect} from 'react';
//MenuDetails 컴포넌트가 호출되는 시점은 PathVariable로
//menuCode 가 넘어오는 시점이다. 해당 파라미터를 꺼내올수 있는 useParams 라는 훅을 router 쪽에서 제공한다.

import {useParams} from 'react-router-dom';


function MenuDetails(){
    // console.log('useParams' , useParams());

    const{menuCode} = useParams;
    const[menu,setMenu] = useState({
        menuName : ' ',
        menuPrice : ' ',
        categoryName : ' ',
        detail : {}
    });

    useEffect(()=>{
        setMenu(getComputedStyle(menuCode));
    },[])
    
    return(
        <>
         <h2>{menu.menuName} 메뉴 상세 </h2>
         <h3> 가격 : {menu.menuPrice} </h3>
         <h3> 종류 : {menu.categoryName} </h3>
         <h3> 설명 : {menu.detail.description} </h3>
         <img src={menu.detail.image} style={{maxWidth:'500px'}}></>
        </>
    )

}

export default MenuDetails;