import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageLayoutComponent } from './ManageShare/manage-layout/manage-layout.component';
import { ManageProductComponent } from './ManageShare/manage-product/manage-product.component';
import { ProductService } from './service/product.service';
import { AboutPcComponent } from './share/about-pc/about-pc.component';
import { AddToCardComponent } from './share/add-to-card/add-to-card.component';
import { CheckoutComponent } from './share/checkout/checkout.component';
import { LayoutComponent } from './share/layout/layout.component';
import { LoginComponent } from './share/login/login.component';
import { ProductDetailComponent } from './share/product-detail/product-detail.component';
import { ProductComponent } from './share/product/product.component';
import { RegisterComponent } from './share/register/register.component';
import { UserComponent } from './share/user/user.component';

const routes: Routes = [
  {
  path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'checkout/:id',component:CheckoutComponent
  },
  {path:'detail/:id',component:ProductDetailComponent},
  {
    path:'home',component:LayoutComponent,children:[
      {path: 'product',component:ProductComponent}
    ]},
  {
    path:'cart',component:AddToCardComponent
  },
  {
    path:'manage',component:ManageLayoutComponent,children:[
      {path: 'mnProduct',component:ManageProductComponent},
      {path: 'product',component:ProductComponent},
      {path: 'user',component:UserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
