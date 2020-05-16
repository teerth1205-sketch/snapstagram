document.addEventListener("DOMContentLoaded", function() {
    loadPics();
    document.getElementById('photo').addEventListener('submit', formData);
    document.getElementById('comment').addEventListener('submit', commentSubmit);
})

async function loadPics() {
   
    let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos');
    let photos = await response.json();
    
    photos.forEach(data => {
      
       let div = document.createElement("div")
       let img = document.createElement("img");
       let h3 = document.createElement("h3");
       let center = document.createElement("center");
       let h5 = document.createElement("h5");
       let ids = document.createElement("p");
       ids.innerText = `${data.id}`;
       ids.style.visibility = "hidden";
       h3.innerText = data.title;
       h5.innerText =  data && data.user ? data.user.name : null;
       img.src = data.image_url;
       let src = document.getElementById("header");
       div.appendChild(ids);
       div.appendChild(h3);
       div.appendChild(h5);
       div.appendChild(img);
       center.appendChild(div);
       src.appendChild(center);
       
       let f = document.createElement("form");
f.setAttribute('id',"comment");

let l = document.createElement("label");
l.setAttribute('for', 'comment')
l.innerText = 'Write Comment'

let i = document.createElement("input"); 
i.setAttribute('id', 'com')//input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"comment");

let s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(l);
f.appendChild(i);
f.appendChild(s);
       center.appendChild(f)
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

async function commentSubmit(e)  {
    e.preventDefault();
    
   let comment = document.getElementById('com').value
   let photo_id = parseInt(document.querySelector('p').value)
   let strongParams = {
        comment: {
            comment, 
            photo_id
        }
        
    }
    
  const config = {
    method: "POST",
    headers: {
      //"Authorization": localStorage.getItem("token"),
      "Accept": "application/json"
    },
    body: strongParams
  }
   return fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/comments', config)
    .then(res => res.json());
} 
    

