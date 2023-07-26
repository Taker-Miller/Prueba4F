export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  fechaNacimiento: string;
  ciudad: string;
  correoElectronico: string;
  idPersona?: string;
  contrasena?: string; // Nuevo campo para la contraseña
  noSoyRobot?: boolean; // Nuevo campo para el checkbox
}
