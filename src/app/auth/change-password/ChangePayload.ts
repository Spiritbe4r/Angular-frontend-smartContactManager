export class ChangePayload{
    oldPassword: String;
    newPassword: String;
    

    constructor(oldPassword:string,newPassword:string){
        this.oldPassword=oldPassword;
        this.newPassword=newPassword;

    }
}