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
export class ContactService {

  constructor(private http:HttpClient) { }

  

  addResponseToRemote(name: string, emailId: string, subject:string, message:string): Observable<any> {
    return this.http.post(AUTH_API + 'contact', {
      name, 
      emailId,
      subject,
      message
    }, httpOptions);
  }
}
