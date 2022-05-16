import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iría un empleado</p>", //componente inline
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"] //componente inline: se aplica para todos los componentes lo que se declara aqui
  //en este caso a todos los parrafos
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";

  apellido = "Díaz";

  edad = 18;

  empresa="Píldoras Informáticas";

  /*getEdad(){
    return this.edad;
  }*///cuando un dato es privado aplicamos este método para hacer uso de el en otra clase

  /*llamaEmpresa(value:string){ //Método que llama al botón

  }*/

  /*cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }*/

  habilitacionCuadro = true;

  usuRegistrado = false;

  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario() {
    this.usuRegistrado = false; //La condición que pongamos aquí es la que se va a ejecutar
  }

  setUsuarioRegistrado(event: Event) { //por medio de este parámetro la función recibe el objeto (nombre, tipo)
    //alert("El usuario se acaba de registrar"); //para ejecutar o mostrar una ventana emergente sencilla

    //this.textoDeRegistro="El usuario se acaba de registrar"

    //alert(event.target)//la propiedad target muestra el objeto del evento

    if ((<HTMLInputElement>event.target).value == "si") {//transformar el objeto del evento a un objeto html de este tipo para poder acceder a su propiedad
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
