import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'orderconfirmThree',
  templateUrl: './orderconfirmThree.component.html'
})

export class OrderconfirmThreeComponent implements OnInit {
   timer:any=null;
   num:number=5;
  constructor(public myRouter:Router) {
  }

  ngOnInit() {
    clearInterval(this.timer);
    this.timer=setInterval(()=>{
      this.num--;
      if (this.num==0){
        this.myRouter.navigateByUrl('/index');
        clearInterval(this.timer);
      }
    },1000);
  }
}
