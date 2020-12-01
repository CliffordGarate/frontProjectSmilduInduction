import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';

import { RegistroEstudianteComponent } from "../dialogs/registro-estudiante/registro-estudiante.component";
import { EstudiantesService } from "../../services/estudiantes.service";
import { GLOBAL } from "../../services/global";

export interface estudiante {
  id_persona: number;
  nom_persona: string;
  ape_pate_pers: string;
  edad: string;
  foto_ruta: string;
  id_grado: number;
  grado: string;
  nivel: string;
}


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  public estudiantes = [];
  public estudiantes_filter = [];
  public url_img: string = '';
  constructor(
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public _estudianteService: EstudiantesService,
  ) { 
    this.url_img = GLOBAL.url_img_personas + 'personas';
    // breakpointObserver.observe([
    //   Breakpoints.HandsetLandscape,
    //   Breakpoints.HandsetPortrait
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     console.log("aplicando responsive")
    //   }
    // });
  }

  ngOnInit(): void {
    this.listarEstudiantes();

  }

  openDialogRegistrar(){
    const dialogRef = this.dialog.open(RegistroEstudianteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarEstudiantes();
          console.log("estudiantes: ", result);
      }
  });
  }
  listarEstudiantes(){
    this._estudianteService.listarEstudiantes().subscribe(
      data=>{
        this.estudiantes = data.estudiantes;
        this.estudiantes_filter = data.estudiantes
        console.log("lista de estudiantes: ", data)
      },error=>{
        console.log("error: ", <any>error)
      }
    )
  }

  applyFilter(term: string) {
    if (!term) {
      this.estudiantes = this.estudiantes_filter;
    } else {
     
      this.estudiantes = this.estudiantes_filter.filter(x =>
        this.evaluar(x, term)
      );
    }
  }
  evaluar(x, term) {
    if (!x.nom_persona || !x.ape_pate_pers || !x.ape_mate_pers || !x.grado || !x.edad || !x.nivel) {
      x.nom_persona = "";
      x.ape_pate_pers = "";
      x.ape_mate_pers = "";
      x.grado = "";
      x.edad = "";
      x.nivel = "";
    }
    return (
       x.nom_persona.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        x.ape_pate_pers.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        x.ape_mate_pers.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        x.grado.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        x.edad.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
        x.nivel.trim().toLowerCase().includes(term.trim().toLowerCase())
      )
  }
  
}
