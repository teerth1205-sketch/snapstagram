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
      
   

let x = document.createElement('button')
x.setAttribute("class", "but")
x.setAttribute("type", "button")
let g = document.getElementById(`${data.id}`)
g.appendChild(x)
x.addEventListener('click', () => pho.renderComments())  

    })
    
    
}



async function formData(e) {
    e.preventDefault();
    
    
    let formDat = new FormData(e.target);
        const config = {
    method: "POST",
    headers: {
     
      "Accept": "application/json"
    },
    body: formDat
  }
  return fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos', config)
    .then(res => res.json());
}
        

async function commentSubmit(e, id)  {
    e.preventDefault();
    
   let content = e.target.getElementsByClassName('com')[0].value
   let name = e.target.getElementsByClassName('user')[0].value
  if (content == "" || name == "") {
      alert("wrong")
  }else {
   
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
    
    });
  }
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


