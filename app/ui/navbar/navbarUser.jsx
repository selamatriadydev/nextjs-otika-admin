"use client"

import Link from "next/link";
import { useState } from "react";

const NavbarUser = ()=> {
    const [isToggledUser, setIsToggledUser] = useState(false);
    return(
        <li className={`dropdown ${isToggledUser ? 'show' : ''}`}>
              <Link
                href="#"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user" onClick={()=> setIsToggledUser(!isToggledUser)}
              >
                {" "}
                <img
                  alt="image"
                  src="assets/img/user.png"
                  className="user-img-radious-style"
                />{" "}
                <span className="d-sm-none d-lg-inline-block" />
              </Link>
              {isToggledUser && (

              <div className="dropdown-menu dropdown-menu-right pullDown show">
              <div className="dropdown-title">Hello Sarah Smith</div>
              <a href="profile.html" className="dropdown-item has-icon">
                {" "}
                <i
                  className="far
                    fa-user"
                />{" "}
                Profile
              </a>{" "}
              <a href="timeline.html" className="dropdown-item has-icon">
                {" "}
                <i className="fas fa-bolt" />
                Activities
              </a>{" "}
              <a href="#" className="dropdown-item has-icon">
                {" "}
                <i className="fas fa-cog" />
                Settings
              </a>
              <div className="dropdown-divider" />
              <a
                href="auth-login.html"
                className="dropdown-item has-icon text-danger"
              >
                {" "}
                <i className="fas fa-sign-out-alt" />
                Logout
              </a>
            </div>
              )}
            </li>
    )
}

export default NavbarUser;