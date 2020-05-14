class UsersController < ApplicationController
    def create 
        User.new(user_params)
    end 
    
    private 
    
    def user_params
        params.require(:user).permit(:name)
    end 
end 