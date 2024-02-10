import Link from "next/link";
import { useState } from "react";

const MenuLink = ({item, isActive, })=> {
    const [isToggled, setIsToggled] = useState(false);
    const handleClick = () => {
        setIsToggled(!isToggled);
    };
    const isSubClass = item.sub?.length ? "menu-toggle has-dropdown" : "";
    const isActiveClass = item.sub?.length ? '' : isActive ? 'active' :'';
    const isToggledClass = item.sub?.length ? '' : isToggled ? 'toggled' : '';
    return(
        <>
        <Link 
            href={item.sub?.length ? '#' : item.path} 
            className={`nav-link ${isActiveClass} ${isToggledClass} ${isSubClass}`} 
            onClick={handleClick}>
                {item.icon}<span>{item.title}</span>
        </Link>
        { isToggled && item.sub?.length  && (
            <ul className={`dropdown-menu`} style={{ display: 'block' }}>
                {item.sub.map((sub) => (
                    <li key={sub.title}>
                        <Link href={sub.path} className={`nav-link`}>
                            {sub.title }
                        </Link>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}
export default MenuLink;