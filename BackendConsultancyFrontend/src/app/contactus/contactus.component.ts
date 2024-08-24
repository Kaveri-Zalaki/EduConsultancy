import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  form: any = {
    name: null,
    emailId:null,
    subject: null,
    message:null,
  }

  constructor(private router:Router, private _service:ContactService) { }

  ngOnInit(): void {
  }

  responseformsubmit(){
    const { name, emailId, subject, message} = this.form;
    this._service.addResponseToRemote(name, emailId, subject, message).subscribe
    (
      data =>
      {
        console.log("Response Added successfully");
        this.router.navigate(['contactus']);
        this.reloadPage();
      },
      error=>console.log("error")
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
