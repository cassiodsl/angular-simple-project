import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    pageTitle = 'Product detail';
    product: IProduct;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `${id}`;
        // this.product = {}
        // this.product.productId = id;
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

}
