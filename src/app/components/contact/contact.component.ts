import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddContactService } from 'src/services/add-contact.service';
import { Contact } from 'src/services/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactoActual : Contact;
  editContact=new FormGroup({
    cid: new FormControl(''),
      
      name: new FormControl(''),
      secondName:new FormControl(''), 
      description:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl(''),
      work:new FormControl(''),
      

  })

  mensaje!: string;

  constructor(private route: ActivatedRoute, private contactService: AddContactService, private routers: Router) {
  }



  

  ngOnInit(): void {
    console.log(this.route.snapshot.params.cid)
    this.contactService.getcontactByID(this.route.snapshot.params.cid).subscribe((result)=>{
      this.editContact= new FormGroup({
        cid: new FormControl(result['cid']),
        name: new FormControl(result['name']),
        secondName: new FormControl(result['secondName']),      
        description: new FormControl(result['description']),        
        phone: new FormControl(result['phone']),
        email: new FormControl(result['email']),
        work: new FormControl(result['work']),
        
      })
    })
  }

  /*

  ngOnInit() {
    this.obtenerContacto(this.route.snapshot.paramMap.get('cid'));
  }
  
  obtenerContacto(cid: string) {
    console.log("invocando al metodo");
    this.contactService.getcontactByID(cid).subscribe(
      data => {
        this.contactoActual = data;
      },
      error => {
        console.log(error);
        this.mensaje = "No se puede acceder a la funcion !!!!";
      })
  }*/


  updateContact(){
    this.contactService.updateContact(this.route.snapshot.params.cid,this.editContact.value).subscribe((result)=>{
      console.log(result,"data updated successfull")
      this.mensaje = "Se actualizo correctamente el Contacto";
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error actualizando el contacto";
    })
    this.routers.navigateByUrl('/home')
  }

/*
  actualizarContacto() {
    console.log("Invocando servicio rest-updateByID");
    this.contactService.updateContact(this.contactoActual.cid, this.contactoActual).subscribe(data => {
      console.log(data);
      this.mensaje = "Se actualizo correctamente la funcion";
    },
      error => {
        console.log(error);
        this.mensaje = "Hubo un error actualizando la funcion";
      })
  }*/
  regresar() {
    console.log("A la busqueda de funciones de cine");
    this.routers.navigate(['/']);
  }
}