import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css'


export const Header = () => {
  return (
    <nav className="header-nav"> {/* Agrega la clase "header-nav" */}
      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">¿Quienes Somos?</Link>
      <Link to="/consejos">Consejos</Link>
      <Link to="/VentaPlantas">Venta De Plantas</Link>
      <Link to="/VentaHerramientas">Venta De Herramientas</Link>
      <Link to="/Servicios">Servicios</Link>
      <Link to="/Ubicacion">Ubicacion</Link>
      <Link to="/formulario">Formulario</Link>
      <Link to="/mostrar">Registros</Link>
    
    </nav>
  );
};
