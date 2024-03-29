import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Persona } from '../Interfaces/IFormulario';
import { actualizarPersona, obtenerPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
  const params = useParams();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [idPersona, setIdPersona] = useState('');

  useEffect(() => {
    if (params.idPersona !== undefined) {
      obtenerPersona(params.idPersona).then((v) => {
        if (v !== undefined && v.idPersona !== undefined) {
          setNombre(v.nombre);
          setApellido(v.apellido);
          setEdad('' + v.edad);
          setSexo(v.sexo);
          setCiudad(v.ciudad);
          setFechaNacimiento(v.fechaNacimiento);
          setCorreoElectronico(v.correoElectronico);
          setIdPersona(v.idPersona);
        }
      });
    }
  }, [params.idPersona]);

  const actualizar = () => {
    if (nombre.trim() === '') {
      setErrorNombre('No valen espacios en blanco');
      return;
    } else {
      setErrorNombre('');
    }

    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      sexo,
      ciudad,
      correoElectronico,
      fechaNacimiento,
    };

    actualizarPersona(idPersona, p).then(() => {
      alert('Se actualizó con éxito');
    });

    alert('Bienvenido ' + nombre + ' ' + apellido);
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre('Debe tener más de 4 letras');
    } else {
      setErrorNombre('');
    }
  };

  return (
    <form>
      <label>Nombre: </label>
      <br />
      <input
        type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <span>{errorNombre}</span>
      <br />

      <label>Apellido: </label>
      <br />
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <br />

      <label>Edad: </label>
      <br />
      <input
        type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      />
      <br />

      <label>Sexo:</label>
      <br />
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            name="sexo"
            value="masculino"
            checked={sexo === 'masculino'}
            onChange={(e) => setSexo(e.target.value)}
          />
          Masculino
        </label>
        <br />
        <label className="radio-label">
          <input
            type="radio"
            name="sexo"
            value="femenino"
            checked={sexo === 'femenino'}
            onChange={(e) => setSexo(e.target.value)}
          />
          Femenino
        </label>
      </div>

      <label>Fecha de Nacimiento:</label>
      <br />
      <input
        type="date"
        onChange={(e) => setFechaNacimiento(e.target.value)}
        value={fechaNacimiento}
      />
      <br />

      <label>Ciudad:</label>
      <br />
      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Copiapó">Copiapó</option>
        <option value="Caldera">Caldera</option>
        <option value="Paipote">Paipote</option>
      </select>
      <br />

      <label>Correo Electrónico:</label>
      <br />
      <input
        type="email"
        onChange={(e) => setCorreoElectronico(e.target.value)}
        value={correoElectronico}
      />
      <br />

      <button type="button" onClick={actualizar}>
        Actualizar
      </button>
    </form>
  );
};
