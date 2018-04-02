import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { CategoryListComponent } from '../../category/category-list/category-list.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten'
  ];

  filteredOptions: Observable<string[]>;

  productModel: ProductModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(''),
      map(val => this.filter(val))
      );
    this.productModel = new ProductModel;
    this.productModel.vigente = true;
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  openDialogCategories(): void {
    const dialogRef = this.dialog.open(CategoryListComponent, {
      data: {}
    });
  }
}
