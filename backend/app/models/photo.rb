class Photo < ApplicationRecord
    has_many :comments
    belongs_to :user,  required: false
    include Rails.application.routes.url_helpers
    
    has_one_attached:image
    
    validates :title, presence: true
    validates :image_url, presence: true
    validates :user_id, presence: true
    
    def name=(name)
        if User.find_by(name: name)
            self.user = User.find_by(name: name)
        else
            User.create(name: name)
            self.user = User.find_by(name: name)
        end 
    end 
    
    def image_url
        url_for(image)
    end 
end
