import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductsComponent } from './main-products/main-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mainProducts',pathMatch:'full'
  },
  {
    path:'mainProducts',component:MainProductsComponent
  },
  {
    path:'mainProducts/view/:Id',component:ViewProductComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
