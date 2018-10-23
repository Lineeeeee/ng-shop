import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CartComponent} from "./cart/cart.component";
import {DetailComponent} from "./detail/detail.component";
import {IndexComponent} from "./index/index.component";
import {ListComponent} from "./list/list.component";
import {LoginComponent} from "./login/login.component";
import {OrderconfirmComponent} from "./orderConfirm/orderconfirm.component";
import {RegisterComponent} from "./register/register.component";
import { UsercenterComponent} from "./userCenter/usercenter.component";
import { NotfoundComponent} from "./notfound/notfound.component";
import { OrderconfirmThreeComponent} from "./orderConfirm/orderconfirmThree.component";
import { OrderconfirmTwoComponent} from "./orderConfirm/orderconfirmTwo.component";
import { OrderconfirmOneComponent} from "./orderConfirm/orderconfirmOne.component";

const routes: Routes = [
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'list', component: ListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderconfirmComponent,children:[
    {path:'',component:OrderconfirmOneComponent},
    {path:'orderOne',component:OrderconfirmOneComponent},
    {path:'orderTwo',component:OrderconfirmTwoComponent},
    {path:'orderThree',component:OrderconfirmThreeComponent}
  ]},
  {path: 'register', component: RegisterComponent},
  {path: 'center', component: UsercenterComponent},
  {path: 'notfount', component: NotfoundComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}



