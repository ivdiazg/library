import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';

// MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { CategoryMainComponent } from './components/category/category-main/category-main.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductMainComponent } from './components/product/product-main/product-main.component';
import { SaleListComponent } from './components/sale/sale-list/sale-list.component';
import { SaleMainComponent } from './components/sale/sale-main/sale-main.component';
import { SaleAddComponent } from './components/sale/sale-add/sale-add.component';
import { SaleConfirmComponent } from './components/sale/sale-confirm/sale-confirm.component';
import { LibraryService } from './services/library.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientFormComponent,
    CategoryMainComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductMainComponent,
    SaleListComponent,
    SaleMainComponent,
    SaleAddComponent,
    SaleConfirmComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent],
  entryComponents: [CategoryListComponent]
})
export class AppModule { }
