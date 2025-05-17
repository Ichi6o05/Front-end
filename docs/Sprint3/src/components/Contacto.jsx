import React, { useState } from "react";
import stylesContact from "../assets/CSS/Contacto.module.css";


export const Contacto = ({ contactos, setContactos, navegar }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valido = true;

    if (nombre.trim().length < 3 || /\d/.test(nombre)) {
      setErrorNombre("Nombre inválido (mínimo 3 letras y sin números)");
      valido = false;
    } else {
      setErrorNombre("");
    }

    const validadorCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!validadorCorreo.test(correo.trim())) {
      setErrorCorreo("Correo inválido");
      valido = false;
    } else {
      setErrorCorreo("");
    }

    if (!/^\d{9}$/.test(numero.trim())) {
      setErrorTelefono("Teléfono debe tener 9 dígitos");
      valido = false;
    } else {
      setErrorTelefono("");
    }

    if (valido) {
      const nuevo = { nombre, correo, numero };
      setContactos([...contactos, nuevo]);
      alert("Formulario enviado con éxito");
      // Limpia los campos
      setNombre("");
      setCorreo("");
      setNumero("");
    }
  };

  return (
    <>
      <main>
        <div className={stylesContact.mainSeparador} />
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Formulario de contacto</legend>

            <span className={stylesContact.error}>{errorNombre}</span>
            <br />
            <label>Nombre </label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={50}
              size={50}
              placeholder="Ingrese nombre y apellido"
              autoFocus
            />
            <br />

            <span className={stylesContact.error}>{errorCorreo}</span>
            <br />
            <label>Correo </label>
            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              maxLength={50}
              size={50}
              placeholder="Ingrese su correo"
            />
            <br />

            <span className={stylesContact.error}>{errorTelefono}</span>
            <br />
            <label>Numero </label>
            <input
              id="numero"
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Ingrese su numero de telefono"
            />
            <br />

            <input id="btnEnviar" type="submit" value="Enviar" />
            <br />
            <button
              id="btnEnviar"
              type="button"
              onClick={() => navegar("ContactosEnviados")}
              style={{ marginTop: "10px" }}
            >
              Ver datos enviados
            </button>
          </fieldset>
        </form>
        <div className={stylesContact.mainSeparador} />
      </main>
    </>
  );
};
