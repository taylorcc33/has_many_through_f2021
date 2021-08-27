# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Trainer.destroy_all
Pokemon.destroy_all

10.times do 
  name = Faker::Name.name
  location = Faker::Games::Pokemon.location
 

  trainer = Trainer.create(name: name, location: location)

  5.times do 
    pokemon_name = Faker::Games::Pokemon.name
    pokemon_move = Faker::Games::Pokemon.move
    pokemon_level = rand(1..99)
    trainer.pokemons.create(name: pokemon_name, move: pokemon_move, level: pokemon_level )
  end
end

puts "seeded #{Trainer.all.length} trainers and #{Pokemon.all.length} pokemon."



