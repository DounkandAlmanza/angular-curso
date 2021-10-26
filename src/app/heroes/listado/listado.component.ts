import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroe:string[]=['Si', 'Aveces', 'No', 'a'];
  heroeBorrado:string="";

  borrarHeroe(){
    
    //console.log('Borrando....');
    //this.heroe.splice(0,1);
    this.heroeBorrado=this.heroe.shift()||'';
    
  }

}