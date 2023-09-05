import React, { useState } from 'react';
import './Footer.css';
import "../global.css"; 
import '../../../src/index.css';

const Footer = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState(''); // Nuevo estado para el campo "Asunto"
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aca puedo agregar la lógica para manejar los datos del formulario, enviarlos a un servidor o realizar acciones.
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Asunto:', asunto); // Nuevo campo "Asunto"
    console.log('Mensaje:', mensaje);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto:</label> {/* Nuevo campo "Asunto" */}
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;

