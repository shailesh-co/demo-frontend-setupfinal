import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logiform! : FormGroup
  constructor(private fb:FormBuilder ,private authser:AuthService, private router:Router) { 
    this.logiform= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  logiData(){
  const data=  this.logiform.value;
    this.authser.LoginUser(data).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('token', res?.body.token);
      localStorage.setItem('role', res?.body.role);
      if (res?.body.role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    })
  }

}
