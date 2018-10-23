import {Component, OnInit} from '@angular/core';
import {MyhttpService} from "../utility/service/myhttp.service";
import {Router} from "@angular/router";

@Component({
  selector: 'storeIndex',
  templateUrl: './index.component.html',
  styleUrls:['assets/css/item_cat.css','assets/css/animate.css','assets/css/slide.css']
})

export class IndexComponent implements OnInit {
  carouselItems:Array<any>=[];
  newArrivalItems:Array<any>=[];
  recommendedItems:Array<any>=[];
  topSaleItems:Array<any>=[];
  //图片之间轮播的间隔时间
  private NextPhotoInterval: number = 2000;
  //是否要禁用循环播放
  private noLoopSlides: boolean = false;
  //Photos
  private slides: Array<any> = [];
  constructor(public myHttp:MyhttpService,
              public myRouter:Router
              ) {
  }

  ngOnInit() {
    this.initData();
  }
  //初始化轮播图数据
  initData(){
    this.myHttp.sendRequest("http://127.0.0.1/ajia_code/data/product/")
      .subscribe((result:any)=>{
        console.log(result);
         this.carouselItems=result.carouselItems;
         this.topSaleItems=result.topSaleItems;
         this.newArrivalItems=result.newArrivalItems;
         this.recommendedItems=result.recommendedItems
          // for(var i=0;i<this.carouselItems.length;i++){
          //   this.slides.push({image:this.carouselItems[i].img});
          // }
          //  console.log(this.slides);
      })



  }

}
