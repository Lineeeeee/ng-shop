import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { MyhttpService} from "../service/myhttp.service";

@Component({
  selector: 'storeHeader',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  myKw:string='';
  userLogin:boolean=false;
  uName:string='';
  isClose:boolean=false;
  log:boolean=false
  constructor(public myRouter:Router,
               public myHttp:MyhttpService
              ) {
  }
  ngOnInit() {
    this.login();
  }
  //传递搜索关键字跳到lits页面
  toList(){
   this.myRouter.navigate(
     ["/list/",{myKw:this.myKw}]);
   }

   //检查用户是否登录
  login(){
     this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/user/session_data.php')
       .subscribe((result:any)=>{
          console.log(result);
          if(result.uid==1){
            this.userLogin=true;
            this.uName=result.uname;
          }else {
            this.userLogin=false;
          }
       })
   }

  //退出登录
  outLogin(){
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/user/logout.php')
      .subscribe((result:any)=>{
         if(result.code==200){
           this.userLogin=false;
           this.uName="";
         }
      })
    this.isClose=true;
  }

  //检查是否登录到cart页面
    toCart(){
     this.myRouter.navigate(["/cart/",{isLog:this.userLogin}]);
    }


}
