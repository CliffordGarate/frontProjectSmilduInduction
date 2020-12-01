
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EstudiantesService } from "../../../services/estudiantes.service";

export interface estudiantesData {
  id_persona: string;
  nom_persona: string;
  ape_pate_pers: string;
  ape_mate_pers: string;
  edad: string;
  foto_ruta: string;
  id_grado: string;
  grado: string;
  nivel: string;
}


@Component({
  selector: 'app-buscar-alumnos-pension',
  templateUrl: './buscar-alumnos-pension.component.html',
  styleUrls: ['./buscar-alumnos-pension.component.scss']
})
export class BuscarAlumnosPensionComponent implements OnInit ,AfterViewInit {

  displayedColumns: string[] = ['id_persona', 'nom_persona', 'grado','nro'];
  dataSource: MatTableDataSource<estudiantesData>;
  estudiantes=[];
  resultsLength = 0;
  selected = '0';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef <BuscarAlumnosPensionComponent>,
    private _estudianteService: EstudiantesService
  ) { }



  ngOnInit(): void {
    this.listarAlumnos();
  }
  ngAfterViewInit(): void {   
    // this.dataSource.paginator = this.paginator;
  }

  onNoClick(): void {
    this.dialogRef.close();
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

 listarAlumnos(){
   this._estudianteService.listarEstudiantes().subscribe(
     data=>{
      console.log("estudiantes: ", data)
      this.estudiantes = data.estudiantes;
      this.dataSource = new MatTableDataSource(data.estudiantes);
      this.resultsLength = data.estudiantes.length;
      setTimeout(() =>{
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
      );
     },error=>{}
   )
 }

 listarPagos(){
   const infoSend = this.estudiantes.filter(x=> x.id_persona == this.selected)
  this.dialogRef.close(infoSend);
 }

}
