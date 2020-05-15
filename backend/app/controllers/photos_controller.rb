class PhotosController < ApplicationController
    
    def show
       render json: Photo.find(params[:id])
    end
    
    def create
       
       photo = Photo.create(photo_params)
    #   photo.save
       render json: photo
    end 
    
    def index
        photos = Photo.all
        render json: photos
    end 
    
    def destroy
        
    end 
    
   
    def photo_params
       

        params.require(:photo).permit(:title, :image, :name)
    end 
end 