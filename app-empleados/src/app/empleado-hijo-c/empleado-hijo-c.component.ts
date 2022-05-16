import { Empleado } from './../empleado.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado; //indicamos que va a recibir el dato de empleado

  @Input() indice:number; //el decorador input es para la comunicación de componente padre al componente hijo
  constructor() { }

  ngOnInit(): void {
  }

  empleados:Empleado[]=[

    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdz", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administración", 2500),

  ];

  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
