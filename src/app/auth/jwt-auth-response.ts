export class JwtAuthResponse{
    username: String;
    authenticationToken:string;
    

    constructor(username:string,authenticationToken:string){
        this.username=username;
        this.authenticationToken=authenticationToken;

    }
}