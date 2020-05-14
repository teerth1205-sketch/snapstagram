class PhotosController < ApplicationController
    
    def create 
       photo = Photo.new(photo_params)
       photo.save
       render json: photo
    end 
    
    def index
        photos = Photo.all
        render json: photos.to_json(include: {
            comments: {only: [:content] },
            user: {only: [:name]}
        })
    end 
    
   
    def photo_params
        params.require(:photo).permit(:content, :image, :user_id)
    end 
end 