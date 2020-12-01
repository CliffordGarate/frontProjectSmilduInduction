import { Component, OnInit, ViewChild } from '@angular/core';
import { BuscarAlumnosPensionComponent } from "../dialogs/buscar-alumnos-pension/buscar-alumnos-pension.component";
import { MatDialog } from '@angular/material/dialog';
import { PagarPensionComponent } from "../dialogs/pagar-pension/pagar-pension.component";
import { MovimientosService } from "../../services/movimientos.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface pagoElement {
  id_movimiento: string;
  tipo_movimiento: number;
  desc_pension: string;
  monto: string;
  estado: string;
  fecha_pago: string;
  id_persona: string;
  id_detalle_cronograma: string;
  fecha_venci: string
}


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})


export class PagosComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'desc_pension', 'monto', 'estado'];
  dataSource: MatTableDataSource<pagoElement>;
  arrPagos = [];
  pagosSelect = [];
  arrMoment = [];
  resultsLength = 0;
  nombreEstudiante = '';
  fotoEstudiante = '';
  idMovimientoPendiente = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private _movimientoService: MovimientosService
  ) { 
    
  }

  ngOnInit(): void {

  }

  openDialogBuscar() {
    const dialogRef = this.dialog.open(BuscarAlumnosPensionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("result: ", result)
        this.nombreEstudiante = result[0].nom_persona + ' '+ result[0].ape_pate_pers;
        this.fotoEstudiante = result[0].foto_ruta;
        this.listarPagos(result[0].id_persona);
      }
    });
  }
  openDialogPagar() {
    const arrAux = {
      pagosSelect: this.pagosSelect,
      nombreEstudiante: this.nombreEstudiante,
      fotoEstudiante: this.fotoEstudiante
    }
    console.log("lista de pagos: ", this.pagosSelect)
    const dialogRef = this.dialog.open(PagarPensionComponent,{
      data: arrAux
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("result: ", result)
        this.listarPagos(result);
      }
    });
  }
  listarPagos(id) {
    this._movimientoService.listarMovimientos(id).subscribe(
      data => {
        this.pagosSelect = [];
        this.arrPagos = data.movimientos;
        this.dataSource = new MatTableDataSource(data.movimientos);
        this.mostrarPagoSoloPagoPendiente(data.movimientos);
        console.log("datasource: ", this.dataSource)
        this.resultsLength = data.movimientos.length;
        setTimeout(() => {
          this.dataSource.sort = this.sort
          this.dataSource.paginator = this.paginator
        })
      }, error => {
        console.log("error: ", <any>error)
      }
    )
  }

  mostrarPagoSoloPagoPendiente(arrMovs: any){
    this.arrMoment = arrMovs.filter(a => a.estado == 'POR PAGAR')
    this.idMovimientoPendiente = this.arrMoment[0].id_movimiento
  }

  //add pago
  agregar(data) { // Agregamos el elemento
    this.pagosSelect.push(data);

  }
 //remove pago
  quitar(data) { // Filtramos el elemento para que quede fuera
    this.pagosSelect = this.pagosSelect.filter(mov=>mov.id_movimiento != data.id_movimiento)
  }



}
