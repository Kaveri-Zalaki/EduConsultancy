import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  form: any = {
    name: null,
    emailId:null,
    website: null,
    comment:null,
  }

  constructor(private router:Router, private _service:BlogService) { }

  ngOnInit(): void {
  }

  responseformsubmit(){
    const { name, emailId, website, comment} = this.form;
    this._service.addResponseToRemote(name, emailId, website, comment).subscribe
    (
      data =>
      {
        console.log("Response Added successfully");
        this.router.navigate(['blogs']);
        this.reloadPage();
      },
      error=>console.log("error")
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
