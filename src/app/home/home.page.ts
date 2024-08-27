import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  items=[
    {
      id: 1,
      name:'Product A',
      price:200,
      detail:'this is a product A',
      imageURL:'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/06/Product/asus-tuf-a15-fa507nv-lp023w-gaming-notebook-front-view.png',
    },
    {
      id: 2,
      name:'Product B',
      price:250,
      detail:'this is a product B',
      imageURL:'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product35013_800.jpg',
    },
    {
      id: 3,
      name:'Product C',
      price:199,
      detail:'this is a product C',
      imageURL:'https://www.uboncomputer.co.th/pub/media/catalog/product/cache/566bac40c34e1b79304197de40a22c99/1/_/1_492_3.jpg',
    },
    {
      id: 4,
      name:'Product D',
      price:299,
      detail:'this is a product D',
      imageURL:'https://www.neoshop.co.th/wp-content/uploads/2024/02/w800-7.webp',
    },
  ]

}