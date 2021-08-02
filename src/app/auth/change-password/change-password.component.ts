import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePService } from 'src/services/changeP.service';

import { ChangePayload } from './ChangePayload';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  changePayload: ChangePayload;

  constructor(private formBuilder:FormBuilder,private changeService:ChangePService,private router:Router) { 
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],

      newPassword: ['', [Validators.required],
       ]


    });
    this.changePayload = {
      oldPassword: '',
      newPassword: ''
    }
  }

  
  

  ngOnInit(): void {


  }

  onSubmit() {
    this.changePayload.oldPassword = this.changePasswordForm.get('oldPassword')?.value;
    this.changePayload.newPassword = this.changePasswordForm.get('newPassword')?.value;
    

    this.changeService.changePassword(this.changePayload).subscribe(data => {
      if (data) {
        console.log('cambio de contraseña');
        this.router.navigateByUrl('/home');
      } else {
        console.log('no se pudo cambiar de Contraseña');
      }
    });
  }
}

