
import { Injectable } from '@angular/core';
import { GlobalService } from "./global.service";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(
    private globalService: GlobalService,
  ) { }

  listarMovimientos(id_persona){
    return this.globalService.get('movimientos/list/'+id_persona);
   }
   
   actualizarEstadoMovimientos(data){
    return this.globalService.put('movimientos/actualizar_estado', data);
   }


}
