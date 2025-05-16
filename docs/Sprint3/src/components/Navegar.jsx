import React from 'react'

export const handleNavegar = (ruta, navegar) => (e) => {
  e.preventDefault();
  navegar(ruta);
};
