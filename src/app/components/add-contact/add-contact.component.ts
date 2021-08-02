import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddContactService } from 'src/services/add-contact.service';
import { ContactPayload } from './contact-payload';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addContactForm: FormGroup;
  contactPayload: ContactPayload;
  name = new FormControl('');
  secondName = new FormControl('');
  description= new FormControl('');
  phone = new FormControl('');
  email = new FormControl('');
  work = new FormControl('');
  /*this.registerForm=this.formBuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required],*/

  constructor(private formBuilder:FormBuilder,private addContactService: AddContactService, private router: Router) {

    this.addContactForm = this.formBuilder.group({
      name:['',[Validators.required]],
      secondName:['',[Validators.required]],
      description:this.description,
      phone:['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
      email:['',[Validators.required,Validators.email]],
      work:['',[Validators.required]],
    });
    this.contactPayload = {
      id: '',
      name: '',
      secondName: '',
      username: '',
      description:'',
      phone:'',
      email:'',
      work:'',
      image:''

    }
   }

  ngOnInit(): void {
  }

  addContact() {
    this.contactPayload.name = this.addContactForm.get('name')?.value;
    this.contactPayload.secondName = this.addContactForm.get('secondName')?.value;
    this.contactPayload.email = this.addContactForm.get('email')?.value;
    this.contactPayload.description = this.addContactForm.get('description')?.value;
    this.contactPayload.phone = this.addContactForm.get('phone')?.value;
    this.contactPayload.work = this.addContactForm.get('work')?.value;
    this.addContactService.addContact(this.contactPayload).subscribe(data => {
      this.router.navigateByUrl('/home');
    }, error => {
      console.log('Failure Response');
    });
  }

}
