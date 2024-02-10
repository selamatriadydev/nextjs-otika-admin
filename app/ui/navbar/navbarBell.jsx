"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell
} from "feather-icons-react"

const NavbarBell = ()=> {
    const [isToggledBell, setIsToggledBell] = useState(false);
    return(
        <li className={`dropdown dropdown-list-toggle ${isToggledBell ? 'show' : ''}`}>
            <Link
            href="#"
            data-toggle="dropdown"
            className={`nav-link notification-toggle nav-link-lg`}   onClick={()=> setIsToggledBell(!isToggledBell)}
            >
            <Bell  className="bell" />
            </Link>
            {isToggledBell && (
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown show">
                    <div className="dropdown-header">
                    Notifications
                    <div className="float-right">
                        <a href="#">Mark All As Read</a>
                    </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-icons">
                    <a href="#" className="dropdown-item dropdown-item-unread">
                        {" "}
                        <span className="dropdown-item-icon bg-primary text-white">
                        {" "}
                        <i
                            className="fas
                            fa-code"
                        />
                        </span>{" "}
                        <span className="dropdown-item-desc">
                        {" "}
                        Template update is available now!{" "}
                        <span className="time">2 Min Ago</span>
                        </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                        {" "}
                        <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                            className="far
                            fa-user"
                        />
                        </span>{" "}
                        <span className="dropdown-item-desc">
                        {" "}
                        <b>You</b> and <b>Dedik Sugiharto</b> are now friends{" "}
                        <span className="time">10 Hours Ago</span>
                        </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                        {" "}
                        <span className="dropdown-item-icon bg-success text-white">
                        {" "}
                        <i
                            className="fas
                            fa-check"
                        />
                        </span>{" "}
                        <span className="dropdown-item-desc">
                        {" "}
                        <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to{" "}
                        <b>Done</b> <span className="time">12 Hours Ago</span>
                        </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                        {" "}
                        <span className="dropdown-item-icon bg-danger text-white">
                        {" "}
                        <i className="fas fa-exclamation-triangle" />
                        </span>{" "}
                        <span className="dropdown-item-desc">
                        {" "}
                        Low disk space. Let's clean it!{" "}
                        <span className="time">17 Hours Ago</span>
                        </span>
                    </a>{" "}
                    <a href="#" className="dropdown-item">
                        {" "}
                        <span className="dropdown-item-icon bg-info text-white">
                        {" "}
                        <i
                            className="fas
                            fa-bell"
                        />
                        </span>{" "}
                        <span className="dropdown-item-desc">
                        {" "}
                        Welcome to Otika template!{" "}
                        <span className="time">Yesterday</span>
                        </span>
                    </a>
                    </div>
                    <div className="dropdown-footer text-center">
                    <a href="#">
                        View All <i className="fas fa-chevron-right" />
                    </a>
                    </div>
                </div>

            )}
        </li>
    )
}

export default NavbarBell;