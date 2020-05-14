document.addEventListener("DomContenLoaded", function() {
    loadPics();
})

async function loadPics() {
    let response = await fetch('https://829535e57e074381a7aaea17ef9021a3.vfs.cloud9.us-east-2.amazonaws.com/photos')
    let photos = await response.json()
}

