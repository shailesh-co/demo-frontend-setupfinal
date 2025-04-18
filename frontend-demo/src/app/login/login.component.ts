import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logiform! : FormGroup
  constructor(private fb:FormBuilder ,private authser:AuthService) { 
    this.logiform= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  logiData(){
  const data=  this.logiform.value;
    console.log(this.logiform.value);
    this.authser.LoginUser(data).subscribe((res)=>{
      console.log("I M herre",res)
    })
  }

}
