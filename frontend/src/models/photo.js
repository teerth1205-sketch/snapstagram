class Photo {
    static all = []
    
    constructor(data) {
        this.id = data.id
        this.image = data.image_url
        this.title = data.title
        this.comments = data.comments.map(x => new Comment(x))//`${x.user_id}: ${x.content}`)
        this.name =  data && data.user ? data.user.name : null;
        
    }
    
    save() {
        Photo.all.push(this)
    }
    
    create_card() {
       let div = document.createElement("div");
       div.setAttribute('class', "card");
       let img = document.createElement("img");
       img.setAttribute('class', "card_image")
       let h3 = document.createElement("h3");
       let center = document.createElement("center");
       let h5 = document.createElement("h5");
       let ids = document.createElement("p");   
       ids.innerText = `${this.id}`;
       ids.style.visibility = "hidden";
       h3.innerText = this.title;
       h5.innerText = this.name
       img.src = this.image;
       let src = document.getElementById("header");
       div.appendChild(ids);
       div.appendChild(h3);
       div.appendChild(h5);
       div.appendChild(img);
       center.appendChild(div);
       src.appendChild(center);
    
        let f = document.createElement("form");
        f.setAttribute('id', this.id)
        f.addEventListener('submit', e => commentSubmit(e, this.id));
    
        let l = document.createElement("label");
        l.setAttribute('for', 'comment')
        l.innerText = 'Write Comment'
    
        let i = document.createElement("input"); 
        i.setAttribute('class','com')//input element, text
        i.setAttribute('type',"text");
        i.setAttribute('name',"content");

        let u = document.createElement("input"); 
        u.setAttribute('class','user')//input element, text
        u.setAttribute('type',"text");
        u.setAttribute('name',"name");
        
        let s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type',"submit");
        s.setAttribute('value',"Submit");
        
        f.appendChild(u);
        f.appendChild(l);
        f.appendChild(i);
        f.appendChild(s);
        center.appendChild(f)
    }
    
    renderComments() {
        this.comments.forEach(data => {
            let h6 = data.render_html()
            let com = document.getElementById(this.id);
            com.appendChild(h6);
        })
        // for (let i = this.comments.length; i >= 0; i--) {
        // let h6  = this.comments[i].render_html()
        //     // let h6 = document.createElement("h6");
        //     // h6.innerText = this.comments[i];
        //     let com = document.getElementById(this.id);
        //      com.appendChild(h6);
        // }
        
    }
    
   // <button onclick="myFunction()">Click me</button>
}