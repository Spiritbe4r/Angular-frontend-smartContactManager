export class User{
    id:string;
    username: String;
    email: String;
    enabled: String;
    imageUrl: String;
    about:String;
    roles:{
        id:string;
        name: string;

    }

    constructor(id:string,username:string,email:string,enabled:string,imageUrl:string,about:string){
        this.id=id;
        this.username=username;
        this .email=email;
        this.enabled=enabled;
        this.imageUrl=imageUrl;
        this.about=about;

    }
}

