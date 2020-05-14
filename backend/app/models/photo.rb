class Photo < ApplicationRecord
    has_many :comments
    belongs_to :user
    
    has_one_attached:image
end
