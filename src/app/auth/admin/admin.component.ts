import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangePService } from 'src/services/changeP.service';
import { User } from '../User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users: any[];
  
  mensaje !: string ;

  imagenUrl!:string;
  page=1;
  count=0;
  handlePageChange(event:number){
    this.page=event;
  }

  constructor(private userService:ChangePService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.imagenUrl="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png";
  }

  public getUsuarios(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.about.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsuarios();
    }
  }

}
