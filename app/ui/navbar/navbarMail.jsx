"use client";

import Link from "next/link";
import { useState } from "react";
import {Mail
  } from "feather-icons-react"

const NavbarMail = ()=> {
    const [isToggledMail, setIsToggledMail] = useState(false);
    return(
        <li className={`dropdown dropdown-list-toggle ${isToggledMail ? 'show' : ''}`}>
              <Link
                href="#"
                data-toggle="dropdown"
                className="nav-link nav-link-lg message-toggle" onClick={()=> setIsToggledMail(!isToggledMail)}
              >
                <Mail/>
                <span className="badge headerBadge1">6 </span>{" "}
              </Link>
              {isToggledMail && (
                <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown show">
                <div className="dropdown-header">
                Messages
                <div className="float-right">
                    <a href="#">Mark All As Read</a>
                </div>
                </div>
                <div className="dropdown-list-content dropdown-list-message">
                <a href="#" className="dropdown-item">
                    {" "}
                    <span
                    className="dropdown-item-avatar
                        text-white"
                    >
                    {" "}
                    <img
                        alt="image"
                        src="assets/img/users/user-1.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">John Deo</span>
                    <span className="time messege-text">
                        Please check your mail !!
                    </span>
                    <span className="time">2 Min Ago</span>
                    </span>
                </a>{" "}
                <a href="#" className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-avatar text-white">
                    <img
                        alt="image"
                        src="assets/img/users/user-2.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">Sarah Smith</span>{" "}
                    <span className="time messege-text">
                        Request for leave application
                    </span>
                    <span className="time">5 Min Ago</span>
                    </span>
                </a>{" "}
                <a href="#" className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-avatar text-white">
                    <img
                        alt="image"
                        src="assets/img/users/user-5.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">Jacob Ryan</span>{" "}
                    <span className="time messege-text">
                        Your payment invoice is generated.
                    </span>{" "}
                    <span className="time">12 Min Ago</span>
                    </span>
                </a>{" "}
                <a href="#" className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-avatar text-white">
                    <img
                        alt="image"
                        src="assets/img/users/user-4.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">Lina Smith</span>{" "}
                    <span className="time messege-text">
                        hii John, I have upload doc related to task.
                    </span>{" "}
                    <span className="time">30 Min Ago</span>
                    </span>
                </a>{" "}
                <a href="#" className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-avatar text-white">
                    <img
                        alt="image"
                        src="assets/img/users/user-3.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">Jalpa Joshi</span>{" "}
                    <span className="time messege-text">
                        Please do as specify. Let me know if you have any query.
                    </span>{" "}
                    <span className="time">1 Days Ago</span>
                    </span>
                </a>{" "}
                <a href="#" className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-avatar text-white">
                    <img
                        alt="image"
                        src="assets/img/users/user-2.png"
                        className="rounded-circle"
                    />
                    </span>{" "}
                    <span className="dropdown-item-desc">
                    {" "}
                    <span className="message-user">Sarah Smith</span>{" "}
                    <span className="time messege-text">
                        Client Requirements
                    </span>
                    <span className="time">2 Days Ago</span>
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

export default NavbarMail;