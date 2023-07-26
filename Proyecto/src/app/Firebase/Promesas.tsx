import { Persona } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./FirebaseApp";

const convertirSnapshotAPersona = (snapshot: any): Persona => {
  const datos = snapshot.data();
  return {
    nombre: datos.nombre,
    apellido: datos.apellido,
    edad: parseInt(datos.edad),
    sexo: datos.sexo,
    fechaNacimiento: datos.fechaNacimiento,
    correoElectronico: datos.correoElectronico,
    ciudad: datos.ciudad,
    idPersona: snapshot.id,
  };
};

export const registrarPersona = async (p: Persona) => {
  await addDoc(collection(db, "personas"), p);
};

export const actualizarPersona = async (idPersona: string, p: Persona) => {
  const docRef = doc(db, "personas", idPersona);
  await updateDoc(docRef, { ...p });
};

export const eliminarPersona = async (idPersona: string) => {
  await deleteDoc(doc(db, "personas", idPersona));
};

export const obtenerPersonas = async () => {
  const querySnapshot = await getDocs(collection(db, "personas"));
  var personas: Persona[] = [];
  querySnapshot.forEach((d) => {
    var p: Persona = convertirSnapshotAPersona(d);
    personas.push(p);
  });
  return personas;
};

export const obtenerPersona = async (idPersona: string) => {
  const docRef = doc(db, "personas", idPersona);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const p: Persona = convertirSnapshotAPersona(docSnap);
    return p;
  } else {
    return undefined;
  }
};
