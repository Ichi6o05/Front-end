import { useState } from "react";
import "./App.css";
import { HeaderContent } from "./components/HeaderContent";
import { MangaManhwas } from "./components/MangaManhwas";
import { Contacto } from "./components/Contacto";
import { InfoManghwas } from "./components/InfoManghwas";
import { FooterContent } from "./components/FooterContent";
import ListaContactos from "./components/ListaContactos";

function App() {
  const [componenteActual, setComponenteActual] = useState("MangaManhwas");
  const [contactos, setContactos] = useState([]);

  return (
    <>
      <HeaderContent navegar={setComponenteActual} />

      {componenteActual === "MangaManhwas" && (
        <MangaManhwas navegar={setComponenteActual} />
      )}
      
      {componenteActual === "Contacto" && (
        <Contacto
          contactos={contactos}
          setContactos={setContactos}
          navegar={setComponenteActual}
        />
      )}
      {componenteActual === "ContactosEnviados" && (
        <ListaContactos contactos={contactos} />
      )}
      {componenteActual === 'InfoManghwas' && <InfoManghwas />}

      <FooterContent />
    </>
  );
}

export default App;
