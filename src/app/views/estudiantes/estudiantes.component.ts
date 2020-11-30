import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { RegistroEstudianteComponent } from "../dialogs/registro-estudiante/registro-estudiante.component";
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  constructor(
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) { 
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
  }

  openDialogRegistrar(){
    this.dialog.open(RegistroEstudianteComponent);
  }
  

}
