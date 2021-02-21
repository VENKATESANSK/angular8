import { Component, OnInit, Input, Output } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Output() productItem: Product
  constructor(  private msg:  MessengerService,
    private cartService: CartService) { }

  ngOnInit() {
  }
  handleRemoveToCart() {
  //  this.cartService.removeProductToCart(this.cartItem.id);
    //  this.cartService.removeProductToCart(this.productItem.id).subscribe(() => {
    //   this.msg.sendMsg(this.productItem)
    // });
  }

}
