import React from "react"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid d-flex align-items-baseline">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" />
        </a>
        <input type="text" className="navbar--search" placeholder="Search for your favorite groups in ATG" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="navbar--text">Create account. <a href="#">It's free!</a><i className="ri-arrow-drop-down-line navbar--drop--arrow"></i></p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar