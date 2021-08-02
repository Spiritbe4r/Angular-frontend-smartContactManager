import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder:FormBuilder, private authService : AuthService, private router:Router) { 
    this.registerForm=this.formBuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required],
    Validators.minLength(8)],
      confirmPassword:['',[Validators.required]],
      about:'',

    });
    this.registerPayload={
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
      about:'',
    }
  }

  ngOnInit() {
    
    
  }

  onSubmit(){
    this.registerPayload.username=this.registerForm.get('username')?.value;
    this.registerPayload.email=this.registerForm.get('email')?.value;
    this.registerPayload.password=this.registerForm.get('password')?.value;
    this.registerPayload.confirmPassword=this.registerForm.get('confirmPassword')?.value;
    this.registerPayload.about=this.registerForm.get('about')?.value;

    this.authService.register(this.registerPayload).subscribe( data =>{
      console.log('register success');
      this.router.navigateByUrl('/register-success')

    },error =>{
      console.log('register failed');
    });

  }

}
