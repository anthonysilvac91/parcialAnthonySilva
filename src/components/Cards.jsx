import React from 'react'

const Cards = ({ nombre, fechaNacimiento }) => {

    const calcularEdad = (fechaNacimiento) => {
        const fechaActual = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        const mesActual = fechaActual.getMonth();
        const mesNac = fechaNac.getMonth();
    
        if (mesActual < mesNac || (mesActual === mesNac && fechaActual.getDate() < fechaNac.getDate())) {
          edad--;
        }
    
        return edad;
      };
      return (
        <div className="card">
          <h2>Tu edad actual es:</h2>
          <p>Nombre: {nombre}</p>
          <p>Edad: {calcularEdad(fechaNacimiento)}</p>
        </div>
      );
}

export default Cards