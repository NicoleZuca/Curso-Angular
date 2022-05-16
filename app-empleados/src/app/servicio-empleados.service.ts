import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService { //para modularizar varios componentes que realicen lo mismode la aplicacion

  constructor() { }

  muestraMensaje(mensaje:string){
    
    alert(mensaje);

  }
}
