export default function MenuItem({menu}){

    return( 
        <div className="menu-item"> 
            <i className={menu.icon}></i>
            {menu.title }
        </div>
    )
}