import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit 
{
  pageTitle = 'Product Edit';
  errorMessage: string;
  productForm: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
