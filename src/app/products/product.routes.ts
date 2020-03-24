import { Routes } from "@angular/router";
import { ProductEditComponent } from './product-edit.component';

export const productRoutes : Routes= [
    { path: 'edit/:id', component: ProductEditComponent }
]