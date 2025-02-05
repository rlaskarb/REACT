import itemStyle from './MenuItem.module.css'

function MenuItem({menu}){
    return(
        <div className={itemStyle.MenuItem}>
            <h3> 메뉴이름 : {menu.menuName} </h3>
            <h3> 메뉴가격 : {menu.menuPrice} </h3>
            <h3> 카테고리 이름 : {menu.categoryName} </h3>
        </div>
    )
}


export default MenuItem;