import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

const Eliminar = () => {
  const params = useParams();

  useEffect(() => {
    if (params.idPersona !== undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v !== undefined && v.idPersona !== undefined) {
          console.log("Persona a eliminar:", v);
        }
      });
    }
  }, [params.idPersona]);

  const eliminar = () => {
    if (params.idPersona !== undefined) {
      eliminarPersona(params.idPersona)
        .then(() => {
          alert('Persona eliminada con éxito');
        })
        .catch((error) => {
          alert('Hubo un error al eliminar la persona: ' + error.message);
        });
    } else {
      alert('No se pudo eliminar la persona porque no se encontró un ID válido.');
    }
  };

  return (
    <div>
   
      <p>¿Seguro que quieres eliminar?</p>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
};

export default Eliminar;
