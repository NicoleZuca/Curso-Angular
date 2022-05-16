import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { //inyectar el servicio que creamos en el componente principal

  }

  ngOnInit(): void {
      
   // this.empleados = this.empleadosService.empleados; //trae los datos del array que escribimos manualmente

   //console.log(this.empleadosService.obtenerEmpleados()); //console.log es para que enseñe en consola lo que tiene en ese método
  
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{

      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);//los valores del objeto mis empleados seran almacenados en el array empleados

      this.empleadosService.setEmpleados(this.empleados); //cada vez que agreguemos un registro, va a llamar al método setEmpleados, se le pasa
      //el registro, viaja y se almacena en misEmpleados:Empleado[] (empleados.service.ts) y se van agregando a los empleados

    }) //vigilar cualquier actualización que hace el objeto observable en los datos
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);//guarda la información del empleado
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + ' ' + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);//llamada al método creado en el servicio
  }

  cuadroNombre: string=""; //para que la información que introduzcamos en el form viaje y se almacene aquí
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;
}
