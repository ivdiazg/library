import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../model/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  categoryModel: CategoryModel;

  constructor() { }

  ngOnInit() {
    this.categoryModel = new CategoryModel;
    this.categoryModel.vigente = true;
  }
}
