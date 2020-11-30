import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from "./views/estudiantes/estudiantes.component";
import { PagosComponent } from "./views/pagos/pagos.component";
const routes: Routes = [
    {
        path: '',
        redirectTo: 'estudiantes',
        pathMatch: 'full'
    },
    {
        path: 'estudiantes',
        component: EstudiantesComponent,
    },
    {
        path: 'pagos',
        component: PagosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }