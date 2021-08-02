export class RegisterPayload{
    username: String;
    email: String;
    password: String;
    confirmPassword: String;
    about:String;

    constructor(username:string,email:string,password:string,confirmpass2:string,about:string){
        this.username=username;
        this .email=email;
        this.password=password;
        this.confirmPassword=confirmpass2;
        this.about=about;

    }
}