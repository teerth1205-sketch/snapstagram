class Comment {
    constructor(data){
        this.id = data.id
        this.content = data.content
        this.photo_id = data.photo_id
        this.user_id = data.user_id
       
    }
    
    render_html() {
         let h6 = document.createElement("h6");
         console.log(User.all)
         let user = User.all.find(x => x.id === this.user_id)
         h6.innerText = `${user.name}:${this.content}`;
         return h6
       
    }
}