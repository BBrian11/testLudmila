import React from "react";
import logo from "./logo-menu.png";

import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./style.css";
import * as ROUTES from "../../routes";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiInstagramLine, RiFacebookBoxLine, RiPhoneLine, RiMailLine, RiMapPinLine } from "react-icons/ri";
const Footer = () => {
  return (
    
      <footer id="footer">
    <div class="container">
      <h3>Ludmila Rosas</h3>
      <p>Inmobiliaria, La Costa, Buenos Aires, Argentina</p>
      <div class="social-links">
     
        <a href="https://www.facebook.com/inmobiliariarosassb" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/rosasinmobiliaria/" class="instagram"><i class="bx bxl-instagram"></i></a>
        
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span> Ludmila Rosas - Todos los derechos reservados.</span></strong>
      </div>
      <div class="credits">
       
       <a href="https://tryteck.com.ar/">Diseñado por&nbsp; <strong><span>TRYTECK - CONSULTING GROUP</span></strong></a>
      </div>
    </div>
  </footer>
  );
};

const FooterInfo = () => {
  return (
    
    <div className="footer-info-div">
      <IconContext.Provider value={{ className: "medium-menu-icon-phone" }}>
        <p className="footer-margin-tb">
          <RiMapPinLine />
          <a
            href="https://www.google.com/maps/place/San+Bernardo,+Provincia+de+Buenos+Aires/@-36.6929682,-56.7073086,14z/data=!3m1!4b1!4m5!3m4!1s0x959c6f1ade43b00f:0x9aa5de59374eafef!8m2!3d-36.6863655!4d-56.6791979"
            className="footer-email"
            target="_blank"
            rel="noreferrer"
          >
          Chiozza 2685, B7111BBW San Bernardo, Provincia de Buenos Aires
          </a>
        </p>
        <a href="https://wa.link/3l3u8v" className="footer-margin-tb footer-tel">
          <RiPhoneLine /> +54 2257 55-3534
        </a>
        <p className="footer-margin-tb">
          <RiMailLine />{" "}
          <a href="mailto:gillio.inmo@gmail.com" className="footer-email">
           info@ludmilarosas.com.ar
          </a>
        </p>
      </IconContext.Provider>
    </div>
  );
};

export const FooterPropietiesTypes = () => {
  return (
    <ul className="footer-types-div">
      <Link className="menu-link" to={ROUTES.TIPO_DE_PROPIEDAD_SIMPLE_URL + "Casa"}>
        <li className="footer-menu-li footer-margin-tb">Casa</li>
      </Link>
      <Link className="menu-link" to={ROUTES.TIPO_DE_PROPIEDAD_SIMPLE_URL + "Departamento"}>
        <li className="footer-menu-li footer-margin-tb">Departamento</li>
      </Link>
      <Link className="menu-link" to={ROUTES.TIPO_DE_PROPIEDAD_SIMPLE_URL + "Hotel"}>
        <li className="footer-menu-li footer-margin-tb">Hotel</li>
      </Link>
      <Link className="menu-link" to={ROUTES.TIPO_DE_PROPIEDAD_SIMPLE_URL + "Local"}>
        <li className="footer-menu-li footer-margin-tb">Local Comercial</li>
      </Link>
      <Link className="menu-link" to={ROUTES.TIPO_DE_PROPIEDAD_SIMPLE_URL + "Terreno y lote"}>
        <li className="footer-menu-li footer-margin-tb">Lote/Terreno/Campo</li>
      </Link>
    </ul>
  );
};

const FooterMenu = () => {
  return (
    <ul className="footer-menu-div">
      <div className="footer-menu-left">
        <Link className="menu-link" to={ROUTES.HOME}>
          <li className="footer-menu-li footer-margin-tb">Inicio</li>
        </Link>
        <Link className="menu-link" to={ROUTES.VENTA}>
          <li className="footer-menu-li footer-margin-tb">Venta</li>
        </Link>
        <Link className="menu-link" to={ROUTES.ALQUILER_TEMPORAL}>
          <li className="footer-menu-li footer-margin-tb">Alquiler temporario</li>
        </Link>
      </div>
      <div className="footer-menu-left footer-menu-right">
        <Link className="menu-link" to={ROUTES.ALQUILER_ANUAL}>
          <li className="footer-menu-li footer-margin-tb">Alquiler Anual</li>
        </Link>
        <Link className="menu-link" to={ROUTES.NOTICIAS}>
          <li className="footer-menu-li footer-margin-tb">Noticias</li>
        </Link>
        <Link className="menu-link">
          <p className="menu-list menu-hover-efect"> <a href="https://ludmilarosas.com.ar/contacto.html" className="menu-phone-a">
            
          </a>Contacto</p>
        </Link>
      </div>
    </ul>
  );
};

export default Footer;
