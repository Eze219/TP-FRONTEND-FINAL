import React from 'react'
import "../styles/header.css"

function Header() {
    return (
        <header>
            <nav>
                <img
                    className="logo-header"
                    src="/public/img/escudo huracan.png"
                    alt="globo"
                />
                <ul className="lexend">

                    <li>
                        <a href="/">
                            <i className="fa-solid fa-house"></i>
                            <span className="tooltip">Inicio</span>
                        </a>
                    </li>

                    <li>
                        <a href="/club">
                            <i className="fa-solid fa-globe"></i>
                            <span className="tooltip">El Club</span>
                        </a>
                    </li>

                    <li>
                        <a href="/noticias">
                            <i className="fa-solid fa-newspaper"></i>
                            <span className="tooltip">Noticias</span>
                        </a>
                    </li>

                    <li>
                        <a href="/shop">
                            <i className="fa-solid fa-shop"></i>
                            <span className="tooltip">Tienda</span>
                        </a>
                    </li>

                    <li>
                        <a href="/disciplinas">
                            <i className="fa-solid fa-medal"></i>
                            <span className="tooltip">Disciplinas</span>
                        </a>
                    </li>

                    <li>
                        <a href="/contact">
                            <i className="fa-solid fa-envelope"></i>
                            <span className="tooltip">Contacto</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}

export default Header