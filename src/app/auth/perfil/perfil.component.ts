import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { ChangePService } from 'src/services/changeP.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user!: User;
  permaLink!: Number;
  imagenUrl:string;

  constructor(private router: ActivatedRoute, private userService:ChangePService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
      this.imagenUrl="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png";
    });

    this.userService.getUser(this.permaLink).subscribe((data:User) => {
      this.user = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }


}
