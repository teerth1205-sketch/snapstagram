class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title
  has_many :comments
  belongs_to :user
  
end