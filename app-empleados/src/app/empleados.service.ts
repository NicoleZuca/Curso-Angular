import { DataServices } from './data.services';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()
export class EmpleadosService {

  constructor(private ServicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices){

  }

  setEmpleados(misEmpleados:Empleado[]){

    this.empleados=misEmpleados

  }

  obtenerEmpleados(){

    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado[] = []

  /*empleados: Empleado[] = [

    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdz", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administración", 2500),

  ];*/

  agregarEmpleadoServicio(empleado: Empleado) {

    this.ServicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +
    empleado.nombre + "\n" + "Salario: " + empleado.salario);
   
    this.empleados.push(empleado); //agarra la información del empleado guardada en la variable mi empleado y la lleva al array empleados

    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

  actualizaEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado=this.empleados[indice]; //Almacenar en la variable empleadoModificado la información que hay en la posición del array(indice)

    empleadoModificado.nombre=empleado.nombre; //sobreescribir la informacion en esa variable a traves de esa variable
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);

  }

}