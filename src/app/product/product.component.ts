import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() produit:Product={id:0,title:"",price:0,quantity:0,like:0};
  @Output() incrementEvent = new EventEmitter<Product>();
  commander(){
    this.produit.quantity--;
  }

  liker(){
    this.incrementEvent.emit(this.produit);
  }
}
