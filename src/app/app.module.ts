import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './auth.guard';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditcontactComponent } from './components/editcontact/editcontact.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { AdminComponent } from './auth/admin/admin.component';
import { PerfilComponent } from './auth/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    EventsComponent,
    FooterComponent,
    HomeComponent,
    AddPostComponent,
    PostComponent,
    AddContactComponent,
    EditcontactComponent,
    ContactComponent,
    ChangePasswordComponent,
    AdminComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path: 'post/:id', component: PostComponent},
      {path:'register-success',component:RegisterComponent},
      {path:'home',component:HomeComponent},
      {path:'add-post',component:AddPostComponent, canActivate: [AuthGuard]},
      {path:'add-contact',component:AddContactComponent},
      {path:'change-password',component:ChangePasswordComponent},
      {path: 'contacts/actualizar/:cid',component:ContactComponent},
      {path: 'user/perfil/:id',component:PerfilComponent},
      {path: 'admin',component:AdminComponent},
      

    ]),
    HttpClientModule,
    NgbModule,
    EditorModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpClientInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
