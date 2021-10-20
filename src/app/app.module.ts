import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './share/product/product.component';
import { UserComponent } from './share/user/user.component';
import { LayoutComponent } from './share/layout/layout.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { ManageHeaderComponent } from './ManageShare/manage-header/manage-header.component';
import { ManageLayoutComponent } from './ManageShare/manage-layout/manage-layout.component';
import { ManageProductComponent } from './ManageShare/manage-product/manage-product.component';
import { ManageUserComponent } from './ManageShare/manage-user/manage-user.component';
import { LoginComponent } from './share/login/login.component';
import { RegisterComponent } from './share/register/register.component';
import { AddToCardComponent } from './share/add-to-card/add-to-card.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import { AboutPcComponent } from './share/about-pc/about-pc.component';
import { ProductDetailComponent } from './share/product-detail/product-detail.component';
import { CheckoutComponent } from './share/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ManageHeaderComponent,
    ManageLayoutComponent,
    ManageProductComponent,
    ManageUserComponent,
    LoginComponent,
    RegisterComponent,
    AddToCardComponent,
    AboutPcComponent,
    ProductDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatSortModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
