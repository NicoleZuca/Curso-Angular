import { Component } from '@angular/core';

@Component({ //decorador se inicia con el @
  selector: 'app-raiz', //selector al cual llama al componente app-root
  templateUrl: './app.component.html', //una plantilla que especifica el doc html donde esta cargado el componente
  styleUrls: ['./app.component.css'] //archivo css que permite dar formato al componente
})
export class AppComponent {
  title = 'miprimeraApp';

  saludo="Hola alumnos de Angular."
}
