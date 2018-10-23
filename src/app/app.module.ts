import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from "@angular/http";
import { FormsModule} from "@angular/forms";
import { AppRoutingModule} from "./app.router";

import { AppComponent }  from './app.component';
import { CartComponent} from "./cart/cart.component";
import { DetailComponent} from "./detail/detail.component";
import { IndexComponent} from "./index/index.component";
import { ListComponent} from "./list/list.component";
import { LoginComponent} from "./login/login.component";
import { OrderconfirmComponent} from "./orderConfirm/orderconfirm.component";
import { RegisterComponent} from "./register/register.component";
import { UsercenterComponent} from "./userCenter/usercenter.component";
import { NotfoundComponent} from "./notfound/notfound.component";
import { HeaderComponent} from "./utility/header/header.component";
import { FooterComponent} from "./utility/footer/footer.component";
import { Carousel} from "./utility/carsousel/carousel.component";
import { Slide} from "./utility/carsousel/slide.component";
import { MyhttpService} from "./utility/service/myhttp.service";
import { OrderconfirmThreeComponent} from "./orderConfirm/orderconfirmThree.component";
import { OrderconfirmTwoComponent} from "./orderConfirm/orderconfirmTwo.component";
import {OrderconfirmOneComponent} from "./orderConfirm/orderconfirmOne.component";

@NgModule({
  providers:[MyhttpService],
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,
    CartComponent,
    DetailComponent,
    IndexComponent,
    ListComponent,
    LoginComponent,
    OrderconfirmComponent,
    RegisterComponent,
    UsercenterComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    Carousel,
    Slide,
    OrderconfirmOneComponent,
    OrderconfirmTwoComponent,
    OrderconfirmThreeComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
