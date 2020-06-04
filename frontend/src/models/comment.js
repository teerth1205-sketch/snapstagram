class Comment {
    
    static all = []
    
    constructor(data){
        this.id = data.id
        this.content = data.content
        this.photo_id = data.photo_id
        this.user_id = data.user_id
        this.toggled = false
        this.save()
       
    }
    
    save() {
        Comment.all.push(this)
    }
    
    render_html() {
        if (this.toggled == false){
         let h6 = document.createElement("h6");
         console.log(User.all)
         let user = User.all.find(x => x.id === this.user_id)
         h6.innerText = `${user.name}:${this.content}`;
         return h6
         this.toggled = true
        } 
       
    }
}