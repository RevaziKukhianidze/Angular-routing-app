import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServicesService } from 'src/app/services/products-services.service';

@Component({
  selector: 'app-products-inner',
  templateUrl: './products-inner.component.html',
  styleUrls: ['./products-inner.component.css'],
})
export class ProductsInnerComponent implements OnInit {
  currentProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServicesService: ProductsServicesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response) => {
      let productId = response['productsId'];
      this.productsServicesService
        .getProductById(productId)
        .subscribe((resp: any) => {
          this.currentProduct = resp;
        });
    });
  }
}
