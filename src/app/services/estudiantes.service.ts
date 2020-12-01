import { Injectable } from '@angular/core';
import { GlobalService } from "./global.service";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


  constructor(
    private globalService: GlobalService,
  ) {
  
   }

   listarEstudiantes(){
    return this.globalService.get('personas/list');
   }

   listarGrados(){
    return this.globalService.get('personas/list-grados');
   }

   registrarEstudiante(
     url: string,
     files: Array<File>,
     estudiante: any
  ) {
 
    return new Promise(function (resolve, reject) {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append('foto', files[0], files[0].name);
      formData.append('nombre', estudiante.nombre);
      formData.append('ape_pat', estudiante.ape_pat);
      formData.append('ape_mat', estudiante.ape_mat);
      formData.append('fecha_nac', estudiante.fecha_nac);
      formData.append('id_grado', estudiante.id_grado);
      formData.append('nivel', estudiante.nivel);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST', url, true);
      console.log(formData.keys());
      xhr.send(formData);
    });
  }


}
