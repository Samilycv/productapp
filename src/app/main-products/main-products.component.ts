import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.css']
})
export class MainProductsComponent implements OnInit {
  searchkey:string=''
  product:any=[]
  constructor(private api:ApiService){

  }


  ngOnInit(): void {
    this.api.getProduct().subscribe((data:any)=>{
      console.log(data.products);
      this.product=data.products
      
    })

  }
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value
    
  }

}
