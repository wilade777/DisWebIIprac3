import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes

import { AboutComponent } from './pages/about/about.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { CardComponent } from './pages/card/card.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';


export const routes: Routes = [
    {path: '',component: ListProductsComponent},
    {path: 'add', component: AddEditProductComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'Nosotros', component: TablaComponent},
    {path: 'Servicios', component: CardComponent},


    {path: '**',component: ListProductsComponent},
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes,{useHash:true})],
//     exports: [RouterModule]
// })
// export class AppRoutinModule{}

