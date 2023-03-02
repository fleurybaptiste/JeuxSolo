import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../Assets/images/grotteagitoo.png";
import s from "./Header.module.scss";

function Header() {
    return (
        <Navbar className={s.header} expand="md">
            <Navbar.Brand className={s.logo_container}>
                <img
                    src="https://www.de-en-ligne.fr/img/d%C3%A9s/20-faces/de-20-faces.png"
                    alt="Logo"
                    className={s.logo}
                />
                <div className={s.title}>JeuSolo</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-light">
                    <Nav.Link href="#">Nouveautés</Nav.Link>
                    <Nav.Link href="#">Jeux de role</Nav.Link>
                    <Nav.Link href="#">Jeux de plateau</Nav.Link>
                    <Nav.Link href="#">Livres-Jeux</Nav.Link>
                    <Nav.Link href="#">Journaling</Nav.Link>
                    <Nav.Link href="#">Outils de création</Nav.Link>
                    <Nav.Link href="#">Matériel</Nav.Link>
                </Nav>
                <div className={s.search_container}>
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="search-input"
                    />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
