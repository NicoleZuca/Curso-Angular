import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})
export class ContactoComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate(['']);
  }//el método navigate es exclusivo a la clase router y es el que permite ir a donde uno quiera

}
