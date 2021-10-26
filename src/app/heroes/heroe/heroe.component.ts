import { Component } from "@angular/core";

 @Component({
    
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

 })
 export class HeroesComponent{

      nombre:string="La SapaPerra";
      edad: number= 25;

      get nombreCapitalizado(){
         return this.nombre.toUpperCase();
      }

      obtenerNombre():string{
         return `${this.nombre} - ${this.edad}`;
      }

      cambiarNombre():string{
         return this.nombre="El mismisimo Sapo Hpta";
      }

      cambiarEdad():number{
         console.log('hey');
         return this.edad=30;
      }
 }