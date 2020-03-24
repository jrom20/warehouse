import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit.component';
import { productRoutes } from './product.routes';

@NgModule({
    declarations: [
        ProductEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(productRoutes)
    ],
    providers: [
        
    ],
    bootstrap: []
})
export class ProductModule 
{

}
