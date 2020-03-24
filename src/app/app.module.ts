import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutes } from "./routes";
import { RouterModule } from '@angular/router';
import { ProductData } from './products/product-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductListComponent } from './products/producto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './products/product.service';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './common/star.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    InMemoryWebApiModule.forRoot(ProductData),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
