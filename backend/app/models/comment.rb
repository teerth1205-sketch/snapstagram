class Comment < ApplicationRecord
    belongs_to :photo
    belongs_to :user
    
    
    def name=(name)
        if User.find_by(name: name)
            self.user = User.find_by(name: name)
        else
            User.create(name: name)
            self.user = User.find_by(name: name)
        end 
    end 
end
