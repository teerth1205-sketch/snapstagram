document.addEventListener("DOMContentLoaded", function() {
    createUsers();
   // loadPics();
    document.getElementById('photo').addEventListener('submit', formData)
   
})

async function loadPics() {
   
    let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos');
    let photos = await response.json();
    
    photos.forEach(data => {
       let pho = new Photo(data);
       pho.create_card();
      
    //   let div = document.createElement("div");
    //   div.setAttribute('class', "card");
    //   let img = document.createElement("img");
    //   img.setAttribute('class', "card_image")
    //   let h3 = document.createElement("h3");
    //   let center = document.createElement("center");
    //   let h5 = document.createElement("h5");
    //   let ids = document.createElement("p");
    //   ids.innerText = `${data.id}`;
    //   ids.style.visibility = "hidden";
    //   h3.innerText = data.title;
    //   h5.innerText =  data && data.user ? data.user.name : null;
    //   img.src = data.image_url;
    //   let src = document.getElementById("header");
    //   div.appendChild(ids);
    //   div.appendChild(h3);
    //   div.appendChild(h5);
    //   div.appendChild(img);
    //   center.appendChild(div);
    //   src.appendChild(center);
       
//       let f = document.createElement("form");
//       f.setAttribute('id', data.id)
//       f.addEventListener('submit', e => commentSubmit(e, data.id));
let x = document.createElement('button')
let g = document.getElementById(`${data.id}`)
g.appendChild(x)
x.addEventListener('click', () => pho.renderComments())  
// let l = document.createElement("label");
// l.setAttribute('for', 'comment')
// l.innerText = 'Write Comment'

// let i = document.createElement("input"); 
// i.setAttribute('class','com')//input element, text
// i.setAttribute('type',"text");
// i.setAttribute('name',"content");

// let u = document.createElement("input"); 
// u.setAttribute('class','user')//input element, text
// u.setAttribute('type',"text");
// u.setAttribute('name',"name");

// let s = document.createElement("input"); //input element, Submit button
// s.setAttribute('type',"submit");
// s.setAttribute('value',"Submit");

// f.appendChild(u);
// f.appendChild(l);
// f.appendChild(i);
// f.appendChild(s);
// //  center.appendChild(f)
    })
    
    
}



async function formData(e) {
    e.preventDefault();
    // const name = document.getElementById("name").value
    // const title = document.getElementById("title").value
    // const image = document.getElementById("image").val()
    
    // const strongParams = {
    //     photo: {
    //         title,
    //         image, 
    //         name
        
    //     }
    // }
    
    let formDat = new FormData(e.target);
    // data.append("photo[image]", e.target.image.files[0]);
    // data.append("photo[name]", e.target.name.value)
    // data.append("photo[title]", e.target.title.value)
    // debugger
    // let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos', {
        const config = {
    method: "POST",
    headers: {
      //"Authorization": localStorage.getItem("token"),
      "Accept": "application/json"
    },
    body: formDat
  }
  return fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos', config)
    .then(res => res.json());
}
        // method: "POST", 
        // headers: {
        //     "Accept": "application/json", 
        //     'Content-Type':'multipart/form-data'
        // }, 
        // body: data

async function commentSubmit(e, id)  {
    e.preventDefault();
    
   let content = e.target.getElementsByClassName('com')[0].value
   let name = e.target.getElementsByClassName('user')[0].value
   let photo_id = id
   let strongParams = {
        comment: {
            content,
            name, 
            photo_id
        }
        
    }
    
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams)
  }
   return fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/comments', config)
    .then(res => res.json()).then(data => {
      let h5 =  document.createElement("h5")
      h5.innerText = `${data.user_id} : ${data.content}`
      let form = document.getElementById(data.photo_id)
      form.appendChild(h5)// create comment element and append it to the dom
    });
} 

async function createUsers() {
   
    let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/users');
    let users = await response.json();
    console.log(users)
    users.forEach(data => {
        let user = new User(data)
    })
   loadPics();
}

