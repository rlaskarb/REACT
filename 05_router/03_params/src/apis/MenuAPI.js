import menus from '../data/menu-detail.json';

/* menus 라는 이름으로 json 데이터를 사용하겠다. */


// 메뉴 데이터 통채로 return
//getMenuList 함수는 모든 메뉴 데이터를 반환하는 역활을 한다.
export function getMenuList() {
    console.log('menus', menus);
    return menus;
}

// 전달 받은 메뉴 코드를 기반으로 메뉴 상세 조회
export function getMenuByMenuCode(menuCode) {

    // pathVariable 값은 문자열 이기 때문에 정수값이 필요하면 변환 필요!!
    // menuCode 값을 받아서 해당하는 메뉴를 찾는 함수입니다.
    //filter()를 사용해 menuCode가 일치하는 메뉴를 배열로 반환한뒤 [0]을 사용해 첫번쨰 요소를 가져옵니다.
    //parseInt(menuCode)를 사용하여 menuCode가 문자열일 경우 정수형으로 변환합니다.
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];

}

export function getSearchMenu(name) {
    // match 함수 
    // 포함 여부에 따라 인자가 포함되어 있으면 반환을 한다.
    //name을 포함하는 메뉴를 검색하는 함수입니다.
    //menuName.match(name)를 사용하여 정규식 검색을 수행합니다.
    return menus.filter(menu => menu.menuName.match(name));
}