import {Component, OnInit} from '@angular/core';
import {MyhttpService} from "../utility/service/myhttp.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'storeDetail',
  templateUrl: './detail.component.html',
  styleUrls:['assets/css/product_details.css','assets/css/animate.css']
})

export class DetailComponent implements OnInit {
  constructor(public myHttp:MyhttpService,
              public myAr:ActivatedRoute
              ) {
  }
  ngOnInit() {
  }

}
