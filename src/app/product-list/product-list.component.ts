import { Component, OnInit } from '@angular/core';
import { productos } from "../productos";

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
  constructor() { }

  ngOnInit(): void {
  }

}
