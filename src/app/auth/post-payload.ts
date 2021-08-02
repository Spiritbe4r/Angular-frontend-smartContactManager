export class PostPayload{
    id!: String;
    content!: String;
    title!: String;
    username: String;
    
    

    constructor(id:String,content:string,title:string,username:string){
        this.id=id;
        this.username=username;
        this.content=content;
        this.title=title;

    }
}