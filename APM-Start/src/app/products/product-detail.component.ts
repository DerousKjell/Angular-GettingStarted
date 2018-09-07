import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product detail';
  product : IProduct;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private productService : ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }
}
