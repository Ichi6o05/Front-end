import { useState } from "react";
import "./App.css";
import { HeaderContent } from "./components/HeaderContent";
import { MangaManhwas } from "./components/MangaManhwas";
import { Contacto } from "./components/Contacto";
import { InfoManghwas } from "./components/InfoManghwas";
import { FooterContent } from "./components/FooterContent";

function App() {
  const [componenteActual, setComponenteActual] = useState("MangaManhwas");
  return (
    <>
      <HeaderContent navegar={setComponenteActual} />

      {componenteActual === "MangaManhwas" && (
        <MangaManhwas navegar={setComponenteActual} />
      )}
      
      {componenteActual === "Contacto" && <Contacto />}
      {componenteActual === 'InfoManghwas' && <InfoManghwas />}

      <FooterContent />
    </>
  );
}

export default App;
