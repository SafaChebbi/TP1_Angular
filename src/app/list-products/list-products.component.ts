import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  ListProduct : Product [] = [
     {id :1, title :"T-shirt1",price:18, quantity:10,like:0},
    {id :2, title :"T-shirt2",price:20,quantity:5,like:0},
    {id :3,title:"T-shirt3", price:40,quantity:10,like:0}
    ]
    incrementLike(p:Product){
      let i = this.ListProduct.indexOf(p);
      this.ListProduct[i].like++;
    }

}
