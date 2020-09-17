import { Component, OnInit } from '@angular/core';
import { productos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos = productos;

  share() {
    window.alert("El producto ha sido compartido");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { }

  ngOnInit(): void {
  }


}
