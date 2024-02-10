"use client"
import {
    AlignJustify, Maximize, Search
  } from "feather-icons-react"
import Link from "next/link";
import { useEffect, useState } from "react";

import NavbarBell from "./navbarBell";
import NavbarMail from "./navbarMail";
import NavbarUser from "./navbarUser";

const NavBar = () => {
  const[sidebarToogled, setSidebarToggled] = useState(false);
    useEffect(() => {
      document.body.classList.toggle('sidebar-mini', sidebarToogled);
    }, [sidebarToogled]);
    return (
        <>
        <div className="navbar-bg" />
        <nav className="navbar navbar-expand-lg main-navbar sticky">
          <div className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li>
                <Link
                  href="#"
                  data-toggle="sidebar"
                  className="nav-link nav-link-lg collapse-btn"
                  onClick={()=> setSidebarToggled(!sidebarToogled)}
                >
                  {" "}
                  <AlignJustify />
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link nav-link-lg fullscreen-btn">
                  <Maximize />
                </Link>
              </li>
              <li>
                <form className="form-inline mr-auto">
                  <div className="search-element">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      data-width={200}
                    />
                    <button className="btn" type="submit">
                      <Search />
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-right">
            <NavbarMail />
            <NavbarBell/>
            <NavbarUser/>
          </ul>
        </nav>
        </>
    )
}
export default NavBar;