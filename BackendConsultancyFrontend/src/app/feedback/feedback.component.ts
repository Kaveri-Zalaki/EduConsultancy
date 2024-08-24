import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form: any = {
    name: null,
    emailId:null,
    phoneNumber: null,
    feedback:null,
  }

  constructor(private router:Router, private _service:FeedbackService) { }

  ngOnInit(): void {
  }

  responseformsubmit(){
    const { name, emailId, phoneNumber, feedback} = this.form;
    this._service.addResponseToRemote(name, emailId, phoneNumber, feedback).subscribe
    (
      data =>
      {
        console.log("Response Added successfully");
        this.router.navigate(['feedback']);
        this.reloadPage();
      },
      error=>console.log("error")
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
