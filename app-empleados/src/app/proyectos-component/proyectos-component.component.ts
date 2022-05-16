import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  empleados:Empleado[]=[];

  ngOnInit(): void {

    this.empleados = this.empleadosService.empleados;

  }

  volverHome(){
    this.router.navigate(['']);
  }//el método navigate es exclusivo a la clase router y es el que permite ir a donde uno quiera

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);//guarda la información del empleado
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + ' ' + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);//llamada al método creado en el servicio
    
    this.router.navigate(['']);
  }

  cuadroNombre: string=""; //para que la información que introduzcamos en el form viaje y se almacene aquí
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;

}
