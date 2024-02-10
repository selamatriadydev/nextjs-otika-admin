"use client"
import { usePathname } from "next/navigation";
import Brand from "./brand/brand";
import menuItems from "@/app/data/sidebar/menuItems";
import MenuLink from "./menuItem/menuLink/menuLink";

const Sidebar = ()=> {
  const pathName = usePathname();
    return(
        <div className="main-sidebar sidebar-style-2">
          <aside id="sidebar-wrapper">
            <Brand />
            <ul className="sidebar-menu">
              {menuItems.map((item) => (
                  <>
                  {item.header && (<li key={item.header} className="menu-header"> {item.header}</li>)}
                  {item.list.map((list) => (
                      <li key={list.title} className={`dropdown ${pathName === list.path && 'active'}`}>
                          <MenuLink item={list} active={list.path && pathName==list.path} />
                      </li>
                  ))}
                  </>
              ))}
            </ul>
          </aside>
        </div>
    )
}

export default Sidebar;