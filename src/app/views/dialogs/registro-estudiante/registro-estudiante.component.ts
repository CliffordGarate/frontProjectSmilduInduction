import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { EstudiantesService } from "../../../services/estudiantes.service";
import { GLOBAL } from '../../../services/global';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Estudiante } from "./model/estudiante";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from "moment";

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class RegistroEstudianteComponent implements OnInit {


  estudiante = new Estudiante();
  estudianteFormGroup: FormGroup;
  edadEstudiante = '';
  grados = [];
  url = '';
  maxDate = new Date();
  constructor(
    public dialogRef: MatDialogRef<RegistroEstudianteComponent>,
    private _estudianteService: EstudiantesService,
    private formBuilder: RxFormBuilder,
    private datePipe: DatePipe
  ) {
    this.url = GLOBAL.url;
   }


  ngOnInit(): void {
    this.estudianteFormGroup = this.formBuilder.formGroup(this.estudiante);
    this.listarGrados();
  }
  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  listarGrados(){
    this._estudianteService.listarGrados().subscribe(
      data=>{
        this.grados = data.grados;
      },error=>{
        console.log("error: ", <any>error)
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  calcularEdad() {
    moment.locale('es');
    const dateA = moment(this.estudiante.fechaNac).format('YYYY.MM.DD');
    console.log("dateA: ", dateA)
    console.log("edad: ", moment(dateA, 'YYYY.MM.DD').fromNow(true))
    this.edadEstudiante = moment(dateA, 'YYYY.MM.DD').fromNow(true);
    console.log("fecha", moment(this.estudiante.fechaNac).format('DD-MM-YYYY'))
  }
  selectNivel(event){
    this.grados.forEach(element => {
      if(element.id_grado == event){
        this.estudiante.nivelEstu = element.nivel
      }
    });
  }
  registrarEstudiante(){
    if(this.estudianteFormGroup.valid){
      this.estudiante.fechaNac = moment(this.estudiante.fechaNac).format('YYYY-MM-DD')
  
      console.log("estudainte: ", this.estudiante)
      this._estudianteService.registrarEstudiante(
        this.url + 'personas/register',
        this.filesToUpload, 
        this.estudiante
        ).then((result: any) => {
          console.log("todo bien")
          // const data = {
          //   id_persona: result.id_estudiante,
          //   nom_persona: this.estudiante.nombre,
          //   ape_pate_pers: this.estudiante.ape_pat,
          //   ape_mate_pers: this.estudiante.ape_mat,
          //   edad: this.edadEstudiante,
          //   foto_ruta: this.filesToUpload[0].,
          //   id_grado: this.estudiante.id_grado,
          //   grado: this.estudiante.id_grado,
          //   nivel: this.estudiante.nivel,
          // }
          this.dialogRef.close(this.estudiante);
       
      }).catch((err) => {
        console.log("error: ", <any>err)
      })
      console.log("foto: ", this.filesToUpload)
      console.log("Data a mandar: ", this.estudiante)
    }
  }



}
