import { Routes } from "@angular/router";
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/producto-list.component';

export const AppRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: '',  redirectTo: '/welcome', pathMatch: 'full'}
]