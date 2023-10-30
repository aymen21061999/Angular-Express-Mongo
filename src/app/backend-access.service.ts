import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  //import
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data : any;
  expresponse : string="";
  constructor(private http : HttpClient){
  }
  getAllUsers(){
    this.http.get('http://localhost:8010/getAll').subscribe((response)=>{
      this.userList = response;
      console.log(this.userList);
    });
    return this.userList;
  }
  addUser(udata : any) :any{
    console.log(udata);
    console.log(udata.value);
    this.userList.push(udata.value);
    this.http.post('http://localhost:8010/insert',udata.value).subscribe((response)=>{
    this.expresponse=response.toString();  
    //console.log(response);
    });
    return this.expresponse;
  }
}

/*



*/