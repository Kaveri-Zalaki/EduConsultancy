import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  

  addResponseToRemote(name: string, emailId: string, website:string, comment:string): Observable<any> {
    return this.http.post(AUTH_API + 'blog', {
      name, 
      emailId,
     website,
      comment
    }, httpOptions);
  }
}
