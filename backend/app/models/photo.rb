class Photo < ApplicationRecord
    has_many :comments
    belongs_to :user,  required: false
    include Rails.application.routes.url_helpers
    
    has_one_attached:image
    
    def name=(name)
        self.user = User.find_by(name: name)
    end 
    
    def image_url
        url_for(image)
    end 
end
