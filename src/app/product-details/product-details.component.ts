import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos } from "../productos";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  producto;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.producto = productos[+params.get('productoId')];
    });
  }

  addToCart(producto) {
    this.cartService.addToCart(producto);
    window.alert('¡Su producto ha sido agregado al carrito!');
  }
}
