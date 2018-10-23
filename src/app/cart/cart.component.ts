import {Component, OnInit} from '@angular/core';
import { MyhttpService} from "../utility/service/myhttp.service";
import { ActivatedRoute} from "@angular/router";


@Component({
  selector: 'storeCart',
  templateUrl: './cart.component.html',
  styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
  isLogin:boolean=false;
  //商品数据
  cartList:Array<any>=[];
  //是否显示提示框
  isMsg:boolean=false;
  //商品编号
  iid:number=0;
  //选择状态
  url:string='img/cart/product_normal.png';
  //总金额
  num:number=0;
  constructor(public myHttp:MyhttpService,
              public myAr:ActivatedRoute,
              ) {
  }

  ngOnInit() {
    //准备接受参数
    this.myAr.params.subscribe((data:any)=>{
      console.log(data);  // this.isLogin=data.isLog;
      if(data.isLog=='true') {
        this.isLogin = false;
      }else {
        this.isLogin=true;
      }
    });
    this.initData();
  }
  //请求购物车数据
  initData(){
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/cart/list.php')
      .subscribe((result:any)=>{
           console.log(result);
           this.cartList=result.data;
      })
    }
  //商品加
  add(iid:number,count:number){
    count++;
   this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/cart/update_count.php?iid='+iid+'&count='+count)
     .subscribe((result:any)=>{
     })
    this.initData()
  }
  //商品减
  del(iid:number,count:number){
     count--;
     this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/cart/update_count.php?iid='+iid+'&count='+count)
       .subscribe((result:any)=>{
       })
    this.initData();
  }
  //是否显示提示框
   Msg(iid:number){
    this.iid=iid;
    this.isMsg=true;
   }
  //删除商品
  delete(){
    this.isMsg=false;
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/cart/del.php?iid='+this.iid)
      .subscribe((result:any)=>{
      })
    this.initData();
  }
  //取消删除
  noDelete(){
    this.isMsg=false;
  }
  //选中商品
  selectShop(price:number,count:number){
  }

}
