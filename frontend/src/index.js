document.addEventListener("DOMContentLoaded", function() {
    loadPics();
    document.querySelector('form').addEventListener('submit', formData);

})

async function loadPics() {
    let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos');
    let photos = await response.json();
    
    photos.forEach(data => {
       let photo =  data.image
       let img = document.createElement("img");
       img.src = data.image_url;
let src = document.getElementById("header");
src.appendChild(img);
       
    })
    debugger
    
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

   
    

