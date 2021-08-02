import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPostService } from 'src/app/add-post.service';
import { PostPayload } from 'src/app/auth/post-payload';

import { AddContactService } from 'src/services/add-contact.service';
import { Contact } from 'src/services/contact';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contacts: any[];
  contactoActual !: Contact ;
  mensaje !: string ;

  imagen!:string;
  page=1;
  count=0;
  handlePageChange(event:number){
    this.page=event;
  }

 

  

  
  posts!: Observable<Array<PostPayload>>;
  constructor(private addContactService: AddContactService,private router :Router ,private postService: AddPostService) { }//private postService: AddPostService
  ngOnInit(): void {
    this.getContacts();
    this.posts = this.postService.getAllPosts();
    this.imagen="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png";

  }
  


  public getContacts(): void {
    this.addContactService.getContacts().subscribe(
      (response: Contact[]) => {
        this.contacts = response;
        console.log(this.contacts);
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchContacts(key: string): void {
    console.log(key);
    const results: Contact[] = [];
    for (const contact of this.contacts) {
      if (contact.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || contact.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || contact.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || contact.work.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(contact);
      }
    }
    this.contacts = results;
    if (results.length === 0 || !key) {
      this.getContacts();
    }
  }

  public borrarContacto(id:string){
    console.log("invocando metodo de borrado del backend")
    this.addContactService.deleteContact(id).subscribe(data=>{
      console.log("imprimiendo respuesta del backend ");
      console.log(data);
      this.getContacts();
      this.router.navigate(['/']);
    },
    error=>{
      console.log(error);
    }
    );

  }
  /*
  obtenerFuncion(id: number | null )
  {
    console.log("Invocando servicio rest-findByID");
     this.addContactService.getFuncionByID(id).subscribe(data =>{
      console.log(data); 
      this.contactoActual = data;
    },
    error => {
      console.log(error);
      this.mensaje = "No se puede acceder a la funcion !!!!";   
    })  
  }  

      

  actualizarFuncion()
  {
    console.log("Invocando servicio rest-updateByID");
     this.addContactService.updateContact(this.contactoActual).subscribe(data =>{
      console.log(data); 
      this.mensaje = "Se actualizo correctamente la funcion";   
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error actualizando la funcion";   
    })  
  }  */
  

  

  

}
