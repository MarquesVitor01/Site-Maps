import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
    return (
        <footer id="contatos" className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-logo-container">
                        <img
                            src="../../../img/logo.png"
                            alt="Logo"
                            className="footer-logo"
                        />
                    </div>
                    <div className="footer-info">
                        <div className="footer-contact">
                            <h5>Contato</h5>
                            <p><b>Email</b></p>
                            <p>contato@grupomapsempresas.com.br</p>
                            <p>marketing@grupomapsempresas.com.br</p>
                            <p><b>Telefone</b> </p>
                            <p>(11) 3939-2301</p>
                        </div>
                        <div className="footer-social">
                            <h5>Redes Sociais</h5>
                            <ul className="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/grupomapsempresas">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;