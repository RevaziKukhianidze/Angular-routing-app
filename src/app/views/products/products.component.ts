import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServicesService } from 'src/app/services/products-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsServicesService: ProductsServicesService) {}

  ngOnInit(): void {
    this.productsServicesService.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
}
