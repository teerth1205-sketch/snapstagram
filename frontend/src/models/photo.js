class Photo {
    static all = []
    
    constructor(data) {
        this.id = data.id
        this.image = data.image_url
        this.title = data.title
        this.save
    }
    
    save() {
        Photo.all.push(this)
    }
}