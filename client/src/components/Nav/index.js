import React from "react";

function Nav() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Google Books Search</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="/">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="">Search</a></li>
                <li><a href="">Saved</a></li>
            </ul>
        </>
    );
}

export default Nav;