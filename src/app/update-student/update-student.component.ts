import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  data:object = {};
  student=[];
  exist = false;
  productObj:object = {};
  private HttpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

updateProduct(students){
  this.productObj = {
    "name" : students.name,
    "color" : students.color
  };
  const url=`${"http://localhost:5555/student"}/${this.id}`;
  this.http.put(url, JSON.stringify(this.productObj),{headers:this.HttpHeaders})
  .toPromise()
  .then(()=> {
    this.router.navigate(['/']);
  })
}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.http.get('http://localhost:5555/student').subscribe(
      (res: Response)=>{
        //this.student = res.json();
        //return this.student = res;
        for(var i=0;i<this.student.length;i++){
          if(parseInt(this.student[i].id) === this.id)
          {
            this.exist = true;
            this.data = this.student[i];
            break;
          }else{
            this.exist=false;
          }
        }
      }
    )
  }

}
