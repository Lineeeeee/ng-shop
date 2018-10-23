import {Component, OnInit} from '@angular/core';
import {MyhttpService} from "../utility/service/myhttp.service";
import {Router} from "@angular/router";
@Component({
  selector: 'storeLogin',
  templateUrl: './login.component.html',
  styleUrls:['assets/css/login.css']
})
export class LoginComponent implements OnInit {
  uName:string='';
  uPwd:string='';
  //错误提示框是否显示
  logRes:boolean;
  //错误提示
  Msg:string='';
  constructor(public myHttp:MyhttpService,
              public myRouter:Router
              ) {
  }
  ngOnInit() {
  }
  //用户登录方法
  login(){
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/user/login.php?uname='+this.uName+'&upwd='+this.uPwd)
      .subscribe((result:any)=>{
      if (result.code==200){
          this.logRes=false;
          this.myRouter.navigateByUrl('/index') ;
          }else if(result.code==201){
              this.logRes=true;
              this.Msg='用户名或密码错误';
          }else if(result.code==401||result.code==402){
                this.logRes=true;
                this.Msg='用户名或密码为空';
        }
      })
  }
  //关闭错误提示
  close(){
    this.logRes=false;
  }
}
