document.addEventListener("DOMContentLoaded", function() {
    createUsers();
   // loadPics();
    document.getElementById('photo').addEventListener('submit', formData)
    
   
})

async function loadPics() {
   
    let response = await fetch('https://7056fcf58cf84c3f92b471b1992c1bf2.vfs.cloud9.us-east-2.amazonaws.com/photos');
    let photos = await response.json();
    
photos.forEach(data => {
       let pho = new Photo(data);
       pho.create_card();
      
   

let x = document.createElement('button')
x.setAttribute("class", "but")
x.setAttribute("type", "button")
x.innerText = "View Comments"
let g = document.getElementById(`${data.id}`)
g.appendChild(x)
x.addEventListener('click', () => pho.renderComments())  


    })
    let s = document.getElementById("search")
    s.addEventListener('submit', searchPhoto )
    let d =  document.createElement('div')
    d.setAttribute('id', 'titles')
s.appendChild(d)
}

function renderTitle(pho) {
    pho.preventDefault
    
    let s = document.getElementById("titles")
    let h6 = document.createElement("h6")
    h6.innerText = pho
    s.appendChild(h6)
}

function searchPhoto(e){
    e.preventDefault()
   let s =  document.getElementById('sear').value
   let titles = Photo.all.filter(pho => pho.title.includes(s) )
   let f = document.getElementById("titles")
   f.innerHTML = ''
   titles.forEach(pho => {renderTitle(pho.title)})
   
   
}

// function search() {
//     let s = document.getElementById("search")
//     s.addEventListener('submit', searchPhoto )
// }

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
  return fetch('https://7056fcf58cf84c3f92b471b1992c1bf2.vfs.cloud9.us-east-2.amazonaws.com/photos', config)
    .then(res => res.json())
    .then(data => {
        let pho = new Photo(data)
        document.getElementById('header').innerHTML = ''
        //pho.create_card()
        // let pho = new Photo(data)
     Photo.all.forEach(photo => {
            photo.create_card()
     }) 
        
    });
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
   return fetch('https://7056fcf58cf84c3f92b471b1992c1bf2.vfs.cloud9.us-east-2.amazonaws.com/comments', config)
    .then(res => res.json())
    .then(data => {
        let com = new Comment(data)
        
        // Comment.all.forEach(comm => {
             
          let h6 = document.createElement("h6");
        
          h6.innerText = `${name}:${com.content}`;
         
             
         
             
          let comms = document.getElementById(photo_id);
              comms.appendChild(h6);
        // })
      
    
    });
  }
} 

async function createUsers() {
   
    let response = await fetch('https://7056fcf58cf84c3f92b471b1992c1bf2.vfs.cloud9.us-east-2.amazonaws.com/users');
    let users = await response.json();
    console.log(users)
    users.forEach(data => {
        let user = new User(data)
    })
   loadPics();
}


