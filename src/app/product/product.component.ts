import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  confirmationString:string = "New student has been added!";
  isAdded:boolean = false;
  productObj:object={};

  addNewProduct = function(product){
    this.productObj = {
      "name": product.name,
      "color": product.color
    }
    this.http.post('http://localhost:5555/student',this.productObj).subscribe((res:Response)=>{
      this.isAdded = true;
    })
  }

  ngOnInit(): void {
  }

}
