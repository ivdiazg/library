import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { CategoryMainComponent } from './components/category/category-main/category-main.component';
import { ProductMainComponent } from './components/product/product-main/product-main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientFormComponent },
  { path: 'category', component: CategoryMainComponent },
  { path: 'product', component: ProductMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
