import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private  http: HttpClient) { }
  saveuser(user : Detail){
    let body:any =  user; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/Data?v='+d.toLocaleTimeString();
   this.http.post<Detail>(hostUrl, body).subscribe(responseData    => {
       alert("data save successfull");
       
    }
    ); 
  }
}
