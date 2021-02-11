import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  id:number;
  private HttpHeaders = new HttpHeaders({'Content-type':'application/json'});

  student = [];
  fetchData = function(){
    this.http.get('http://localhost:5555/student').subscribe(
      (res: Response)=>{
        //this.student = res.json();
        return this.student = res;
      }
    )
  }
  deleteProduct = function(id){
    if(confirm("Are you sure?")){
      const url=`${"http://localhost:5555/student"}/${this.id}`;
      return this.http.delete(url, {HttpHeaders: this.HttpHeaders}).toPromise()
      .then(()=>{
        this.fetchData();
    })
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }

}