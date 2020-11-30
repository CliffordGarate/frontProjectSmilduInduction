import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pagar-pension',
  templateUrl: './pagar-pension.component.html',
  styleUrls: ['./pagar-pension.component.scss']
})
export class PagarPensionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef <PagarPensionComponent>
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
 }

}
