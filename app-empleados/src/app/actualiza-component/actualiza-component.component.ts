import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  empleados: Empleado[] = [];

  accion: number;

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']); //en la variable accion se va a guardar 1 si es modificar y 2 si es eliminar segun lo declaramos en el html

    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id'];//rescatamos el id del empleado que viene en la URL y lo almacenamos aqui

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    //construye un ojeto de tipo empleado y llamamos el metodo encontrarEmpleado pasandole un indice para que encuentre al empleado,
    //ese metodo tiene un return para que devuelva al empleado y ese empleado se almacena en la variable empleado

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }//el método navigate es exclusivo a la clase router y es el que permite ir a donde uno quiera

  /*actualizaEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);//guarda la información del empleado
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + ' ' + miEmpleado.apellido);
    this.empleadosService.actualizaEmpleado(this.indice, miEmpleado);//llamada al método creado en el servicio
    
    this.router.navigate(['']);
  }

  eliminaEmpleado(){

    this.empleadosService.eliminarEmpleado(this.indice);

    this.router.navigate(['']);
  }*/

  actualizaEmpleado() {

    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);//guarda la información del empleado
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + ' ' + miEmpleado.apellido);
      this.empleadosService.actualizaEmpleado(this.indice, miEmpleado);//llamada al método creado en el servicio

      this.router.navigate(['']);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);

      this.router.navigate(['']);
    }
  }

  cuadroNombre: string = ""; //para que la información que introduzcamos en el form viaje y se almacene aquí
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number;

}
