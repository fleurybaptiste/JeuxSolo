import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h4>À propos de nous</h4>
                        <p>
                            Nous sommes une boutique en ligne spécialisée dans
                            la vente de jeux de rôles solo papier.
                        </p>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h4>Liens rapides</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Accueil</a>
                            </li>
                            <li>
                                <a href="#">Jeux de rôles solo papier</a>
                            </li>
                            <li>
                                <a href="#">À propos</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contactez-nous</h4>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-envelope-o"></i>{" "}
                                info@vente-jeux-roles-solo-papier.com
                            </li>
                            <li>
                                <i className="fa fa-phone"></i> +33 1 23 45 67
                                89
                            </li>
                            <li>
                                <i className="fa fa-map-marker"></i> 123 rue de
                                la Paix, 86470 Lavausseau
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="text-muted">
                    © 2023 JeuSolo - Tous droits réservés
                </p>
            </div>
        </footer>
    );
}

export default Footer;
