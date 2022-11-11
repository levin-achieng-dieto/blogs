# Phase 3 Final Project : Blog Posts
## Focus :dart:
Building a Sinatra API backend that uses Active Record to access and persist data in a database, which will be used by a separate React frontend that interacts with the database via the API.
## Learning Goals :male-astronaut:
- Use Active Record to interact with a database.
- Have a minimum of two models with a one-to-many relationship.
- Create API routes in Sinatra that handles at least three different CRUD actions for at least one of your Active Record models.
- Build a separate React frontend application that interacts with the API to perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.
## Frontend Setup :eight_pointed_black_star:
- [x] Clone the repository using `https://github.com/levin-achieng-dieto/blogs` or download and extract the zip file and you can or Clone or get the backend repository using `https://github.com/levin-achieng-dieto/phase-3-sinatra-react-project`
- [x] Open up the cloned folder in your preferred text editor. Open up a terminal within your workspace and navigate into the Phase3-Final-Project folder
- [x] Within that folder `blog-client`, run `npm install` which will install all dependencies for the project and then run `npm start` to get our application running on `http://localhost:3000/`
## Backend Setup :eight_pointed_black_star:
- [x] cd into blog-client folder and run `bundle install` from your terminal which will install all the gems
- [x] seed the database with data using cmd `bundle exec rake db:seed` or alternatively you can use `bundle exec rake db:seed:replant` to delete everything in the database and seed it with data to be fetched by an API
- [x] Finally run `bundle exec rake server` to keep your backend running on `http://localhost:9292` :boom:
## Endpoints API :hammer_and_wrench:
:white_check_mark: Your base URL API for storing posts in SQLite: `http://localhost:9292/posts`
## Core Deliverables :chart_with_upwards_trend:
As a user :male-technologist:, I can:
- `C`reate posts
- `R`ead posts
- `U`pdate posts
- `D`elete posts
- Search for posts using search input :+1:
## Authors :lower_left_ballpoint_pen:
This project was contributed to by:
- [Kevin Lomenen](https://github.com/kevin-lomenen)
- [Levi Dieto](https://github.com/levin-achieng-dieto)
- [Dennis Gachomo](https://github.com/GachomoX)
## License :page_facing_up:
The project is licensed under MIT