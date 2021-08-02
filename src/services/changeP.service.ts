import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ChangePayload } from "src/app/auth/change-password/ChangePayload";
import { User } from "src/app/auth/User";
import { Contact } from "./contact";

@Injectable({
    providedIn: 'root'
  })
  export class ChangePService {
    private url = 'http://localhost:8080/api/';
  
  
    constructor(private httpClient: HttpClient) {
  
    }
  
    /*register(changePayload: ChangePayload): Observable<any> {
      return this.httpClient.post(this.url + 'signup', changePayload);
    }*/
    

    changePassword(data:any){
      var headers = new HttpHeaders()
    .set('Authorization', 'bearer ' + localStorage.getItem('authenticationToken'));

  var options =  {
      headers: headers
  };
       
        return this.httpClient
          .post(this.url + '/contacts/change_password/',data, options)
      }

      public getUsers():Observable<User[]>{
        return this.httpClient.get<User[]>('http://localhost:8080/api/users/all');
      }

      getUser(permaLink: Number):Observable<User>{
        return this.httpClient.get<User>('http://localhost:8080/api/users/get/' + permaLink);
      }

}