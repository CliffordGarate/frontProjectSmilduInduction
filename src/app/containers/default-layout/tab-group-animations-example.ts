import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component ({
  selector: 'tab-group-animations-example' ,
  templateUrl: 'tab-group-animations-example.html' ,
  styleUrls: [ 'tab-group-animations-example.scss' ],
})
export class TabGroupAnimationsExample implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log("listar los estudiantes")
  }

  navegar(vista){
    console.log("entro", vista)
    if(vista.index == "0"){
      console.log("ir a estudiantes")
      this._router.navigate(['/estudiantes']);
    }else if( vista.index == "1"){
      console.log("ir a pagos")
      this._router.navigate(['/pagos']);
    }
  }
}
