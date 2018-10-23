import {Component, OnInit} from '@angular/core';
import {MyhttpService} from "../utility/service/myhttp.service";
import {Router} from "@angular/router";
import {count} from "rxjs/operator/count";
@Component({
  selector: 'orderconfirmOne',
  templateUrl: './orderconfirmOne.component.html',
  styleUrls:['assets/css/order_confirm.css']
})
export class OrderconfirmOneComponent implements OnInit {
  //商品数据
  myList:Array<any>=[];
  //总商品数量
  shopCount:number=0;
  //总金额
  num:number=0;
  constructor(public myHttp:MyhttpService,
              public myRouter:Router
              ) {
  }

  ngOnInit() {
    this.initData();
    this.add();
    setTimeout(this.add(),5000);
  }
  //获取商品数据
  initData(){
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/cart/list.php')
        .subscribe((result:any)=>{
        this.myList=result.data
      })
  }
//计算总金额
  add(){
    for (var i=0;i<this.myList.length;i++){
      this.shopCount+=this.myList[i].count;
      this.num+=this.myList[i].count*this.myList[i].price;
   }
    console.log(this.myList.length);
    console.log(this.num);
    console.log(this.shopCount);
  }
}
