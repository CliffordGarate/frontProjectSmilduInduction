import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DatePipe } from '@angular/common'
import { MovimientosService } from "../../../services/movimientos.service";
import { GLOBAL } from "../../../services/global";
export interface pagosData {
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
  selector: 'app-pagar-pension',
  templateUrl: './pagar-pension.component.html',
  styleUrls: ['./pagar-pension.component.scss']
})
export class PagarPensionComponent implements OnInit {

  displayedColumns: string[] = ['desc_pension', 'fecha_venci', 'monto'];
  dataSource: MatTableDataSource<pagosData>;
  resultsLength = 0;
  total: number = 0;
  url_img = '';
  nombreEstudiante = '';
  fotoEstudiante = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public dialogRef: MatDialogRef <PagarPensionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe,
    private _movimientoService: MovimientosService
  ) { 
    this.url_img = GLOBAL.url_img_personas + 'personas/';
  }

  ngOnInit(): void {
    console.log("data: ", this.data)
    this.nombreEstudiante = this.data.nombreEstudiante;
    this.fotoEstudiante = this.data.fotoEstudiante;
    this.getData();
  }

  getData(){
    this.data.pagosSelect.forEach(element => {
      this.total += parseFloat(element.monto)
    });
    this.resultsLength = this.data.length;
    this.dataSource = this.data.pagosSelect;
    console.log("pagos: ", this.dataSource)
    setTimeout(() =>{
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
 }
 pagarPension(){
   this.data.pagosSelect.forEach(element=>{
    const dataSend = {
      "id_movimiento":element.id_movimiento,
      "estado":"PAGADO"
    }
    this._movimientoService.actualizarEstadoMovimientos(dataSend).subscribe(
      data=> {
        console.log("Pagado... ")
      },error=>{}
    )
   })
   this.dialogRef.close(this.data.pagosSelect[0].id_persona);
 }

}
