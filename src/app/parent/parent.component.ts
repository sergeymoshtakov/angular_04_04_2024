import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  products : any[] = [
    {
      name : "Sprite",
      price : 100,
      quantity : 5,
    },
    {
      name : "Cola",
      price : 120,
      quantity : 4,
    },
  ];

  totalQuantity : number = this.getTotalQuantity();
  totalPrice : number = this.getTotalPrice();

  getTotalQuantity(){
    this.totalQuantity = this.products.reduce((total, product) => total + product.quantity, 0);
    return this.totalQuantity;
  }
  getTotalPrice(){
    this.totalPrice = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    return this.totalPrice;
  }

  onChanged(quantity : number, index : number){
    if(this.products[index].quantity > 0){
      this.products[index].quantity += quantity;
      this.totalQuantity = this.getTotalQuantity();
      this.totalPrice = this.getTotalPrice();
    }
  }
}
