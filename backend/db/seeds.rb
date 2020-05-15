# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{name: "Teerth"}, {name: "Heena"}, {name: "Raj"}])
Photo.create([{title: "great pic", user_id: 1}, {title: "great picture", user_id: 2}])
Comment.create([{content: " hey thats a great photo", user_id: 1, photo_id: 1}])