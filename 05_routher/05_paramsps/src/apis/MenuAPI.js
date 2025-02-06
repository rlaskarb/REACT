// menu-detail 에서 메뉴 데이터를 옴옴
import menus from '../data/menu-detail.json';

export function getMenuList(){
    console.log('menus를 알아보자',menus);
    return menus;

    //getMenuList 함수는 모든 메뉴 데이터를 반환하는 역할을 합니다.
    //console.log() 를 사용하여 menus 데이터가 잘 블러와지는지 확인할 수 있습니다.
}


// 전달 받은 메뉴 코드를 기반으로 메뉴 상세조회하기!
export function getMenuByMenuCode(menuCode){
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
    //menuCode 값을 받아서 해당하는 메뉴를 찾는 함수입니다.
    //filter()를 사용해 menuCode가 일치하는 메뉴를 배열로 반환한뒤,[0]을 사용해 첫 번째 요소를 가져옵니다.
    //parseInt(menuCode)를 사용하여 menuCode 가 문자열일 경우 정수형으로 변환합니다.
}

export function getSearchMenu(name){
    return menus.filter(menu => menu.menuName.match(name));
    // name을 포함하는 메뉴를 검색하는 함수입니다.
    // menuName.match(name) 를 사용하여 정규식 검색을 수행합니다.
}

