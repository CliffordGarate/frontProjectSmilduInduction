import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";


import { AppComponent } from './app.component';
import { TabGroupAnimationsExample } from './containers/default-layout/tab-group-animations-example';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';


import { EstudiantesComponent } from './views/estudiantes/estudiantes.component';
import { PagosComponent } from './views/pagos/pagos.component';

import { AppRoutingModule } from "./app.routing";
import { RegistroEstudianteComponent } from './views/dialogs/registro-estudiante/registro-estudiante.component';
import { BuscarAlumnosPensionComponent } from './views/dialogs/buscar-alumnos-pension/buscar-alumnos-pension.component';
import { PagarPensionComponent } from './views/dialogs/pagar-pension/pagar-pension.component';
@NgModule({
  declarations: [
    AppComponent,
    TabGroupAnimationsExample,
    EstudiantesComponent,
    PagosComponent,
    RegistroEstudianteComponent,
    BuscarAlumnosPensionComponent,
    PagarPensionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    HttpClientModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
