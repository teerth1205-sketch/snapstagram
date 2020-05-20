class Comment < ApplicationRecord
    belongs_to :photo
    belongs_to :user
    
    validates :content, presence: true
    validates :user_id, presence: true
    def name=(name)
        if User.find_by(name: name)
            self.user = User.find_by(name: name)
        else
            User.create(name: name)
            self.user = User.find_by(name: name)
        end 
    end 
end
