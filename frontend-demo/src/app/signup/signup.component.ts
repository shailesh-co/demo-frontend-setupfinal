import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup
  constructor(private fb :FormBuilder ,private authservice:AuthService , private route :Router) { 
    this.registerForm= this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      contact:['',Validators.required],
      role: ['user',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.residata()
  }

  residata() {
    const data = this.registerForm.value;
  
    this.authservice.registerdata(data).subscribe((res) => {
      console.log(res);
  
      if (res.status === 201) {
        this.route.navigate(['login']);
      } else {
        console.warn('Unexpected status code:', res.status);
      }
    }, (err) => {
      console.error('Registration failed:', err);
    });
  }
  
}
