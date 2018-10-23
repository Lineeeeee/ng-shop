import {Component, OnInit} from '@angular/core';
import {MyhttpService} from "../utility/service/myhttp.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'storeList',
  templateUrl: './list.component.html',
  styleUrls: ['assets/css/products.css']
})
export class ListComponent implements OnInit {
  myKw: string= '';
  nowPage: number= 1;
  myList: Array<any>= [];
  pageCount: number= 0;
  list: Array<any>= [];
  constructor(public myHttp: MyhttpService,
              public myAr:ActivatedRoute
              ) { }
  ngOnInit() {
  //准备接受参数
  this.myAr.params.subscribe((data:any)=>{
  this.myKw=data.myKw;
  });
  this.searchDtata();
  }
  //请求商品数据
  searchDtata(){
  this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/product/list.php?kw='
      +this.myKw+'&pno='+this.nowPage)
      .subscribe((result:any)=>{
       console.log(result);
       this.myList=result.data;
       this.pageCount=result.pageCount;
       for (var i = 0; i < this.pageCount; i++) {
              this.list.push(i);
       }
     });
    }
  //上一页，下一页方法
   changPage(isNext: boolean) {
     let pag = this.nowPage;
     if (isNext) {
        pag++;
        if( pag > this.pageCount ) {
           return;
                  }
          } else {
           pag--;
           if (pag == 0) {
             return;
           }
       }
        this.loadPage(pag);
      }
  //添加到购物车功能
  addCart(index:number){
    this.myHttp.sendRequest("http://127.0.0.1/ajia_code/data/cart/add.php?lid="
     +this.myList[index].lid+"&buyCount=1")
     .subscribe((result:any)=>{
     if(result.code==200){
        alert("添加成功！")
         }
        })
  }

  //请求上一页，下一页数据
  loadPage(pno: number) {
    this.nowPage = pno;
    this.myHttp.sendRequest('http://127.0.0.1/ajia_code/data/product/list.php?pno='+pno)
      .subscribe((result: any) => {
        this.myList = result.data;
    });
  }
}
