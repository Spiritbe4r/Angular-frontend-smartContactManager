export class Contact{
    cid:string;
    email: string;
    secondName: string;
    name: string;
    phone: string;  
    work: string;
    description: string;
    username:string;
    image:string;

    constructor(cid:string,email:string,name:string,secondName:string,phone:string,work:string,description:string,username:string,image:string){
        this.cid=cid;
        this.email=email;
        this.name=name;
        this.secondName=secondName;
        this.phone=phone,
        this.work=work;
        this.description=description;
        this.username=username;
        this.image=image;


    }
}