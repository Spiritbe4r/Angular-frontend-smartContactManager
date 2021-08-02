import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { ContactPayload } from 'src/app/components/add-contact/contact-payload';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { environment } from 'src/environments/environment';
import { Respuesta } from 'src/app/components/home/respuesta';






@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
  }

  addContact(contactPayload: ContactPayload){
    return this.httpClient.post('http://localhost:8080/api/contacts/signup', contactPayload);
  }

  public getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>('http://localhost:8080/api/contacts/all_contacts');
  }

  public addContacto(contact: Contact):Observable<Contact>{
    return this.httpClient.post<Contact>('http://localhost:8080/api/contacts/signup',contact);
  }

  public deleteContact(cId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}api/contacts/delete/${cId}`);
  }

  public updateContact(id: number, data: Contact ): Observable<Contact> {
    return this.httpClient.put<Contact>(`${this.apiServerUrl}api/contacts/update/${id}`, data);
  }
 

  public getcontactByID(id: number  ) : Observable<Contact> {
          return this.httpClient.get<Contact>(`${this.apiServerUrl}api/contacts/${id}`); 
        }
  public getContact(permaLink: string):Observable<Contact>{
      return this.httpClient.get<Contact>('http://localhost:8080/api/contacts/' + permaLink);
    }
    
}