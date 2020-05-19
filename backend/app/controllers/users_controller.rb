class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        if user.save
            session[user_id] = user.id
            render json: user
        end 
    end 
    
    def index 
        users = User.all
        render json: users
    end 
    
    
    private 
    
    def user_params
        params.require(:user).permit(:name)
    end 
end 