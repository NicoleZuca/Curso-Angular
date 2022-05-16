import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: object[];

  constructor(){

    this.entradas=[

      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más ded 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"},
    ]
  }

  registrarUsuario(){ //Cuando el usuario da click al botón del form, ese botón va a llamar a esta función, cambiando el valor de registrado, de false a true

    this.registrado = true
    this.mensaje="Usuario registrado con éxito"

  }
  
}
