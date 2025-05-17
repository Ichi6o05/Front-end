import React from "react";
import styles from "../assets/CSS/ListaContactos.module.css";
import stylesContact from "../assets/CSS/Contacto.module.css";

const ListaContactos = ({ contactos }) => {
  if (contactos.length === 0) {
    return (
      <main className={styles.mainContainer}>
        <div className={stylesContact.mainSeparador} />
        <div className={styles.container}>
          <p className={styles.noContactos}>No hay datos enviados aún.</p>
        </div>
        <div className={stylesContact.mainSeparador} />
      </main>
    );
  }

  return (
    <main className={styles.mainContainer}>
      <div className={stylesContact.mainSeparador} />
      <div className={styles.container}>
        <h2 className={styles.h2}>Contactos Enviados</h2>
        <ul className={styles.lista}>
          {contactos.map((contacto, index) => (
            <li key={index} className={styles.item}>
              <strong>{contacto.nombre}</strong> - {contacto.correo} -{" "}
              {contacto.numero}
            </li>
          ))}
        </ul>
      </div>
      <div className={stylesContact.mainSeparador} />
    </main>
  );
};

export default ListaContactos;
