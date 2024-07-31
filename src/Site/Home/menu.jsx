import React from "react";
import { Link } from 'react-router-dom';
import "./menu.css";

function Menu() {
  const scrollDownToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../../../img/logo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"><i className="fa-solid fa-list"></i></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to={'#'} aria-current="page" className=" btn  btn-nav" type="button" id="button-addon2">
                <i className="fa-solid fa-house"></i><b> Home <span className="sr-only">(current)</span></b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link onClick={() => scrollDownToSection('sobre')}
                aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                <i className="fa-solid fa-briefcase"></i><b> Sobre</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link onClick={() => scrollDownToSection('servicos')} aria-current="page" className=" btn btn-nav" type="button" id="button-addon2">
                <i className="fa-solid fa-bag-shopping"></i><b> Serviços</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={'/planos'} aria-current="page" className=" btn   btn-nav" type="button" id="button-addon2">
                <i className="fa-solid fa-comments-dollar"></i><b> Planos</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link onClick={() => scrollDownToSection('comentarios')}  aria-current="page" className=" btn   btn-nav" type="button" id="button-addon2">
              <i className="fa-solid fa-comment"></i><b> Comentários</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link onClick={() => scrollDownToSection('contatos')} aria-current="page" className=" btn   btn-nav" type="button" id="button-addon2">
                <i className="fa-solid fa-address-book"></i><b> Contatos</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;