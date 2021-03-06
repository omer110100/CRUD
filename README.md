# Angular and Laravel Together
This project is the final outcome of making a CRUD app using Angular and Laravel together.

### Key features

 * Not required to integrate JSON Web Token (JWT) or Laravel Passport.
 * Step by step setup guide (Including some useful hints)
 * Angular Version 12.12.1
 * Laravel Version 8.54.0
 * Easy to setup
 * Laravel and Angular project separated(Modouled)
 * Backend developer and front-end can work completely isolated from each other.

####Please follow the following steps to setup the project on your machine.

### Setup Angular Project:

Clone this project into a new folder by copy this code into the git bash terminal
```sh
$ git clone https://github.com/omer110100/CRUD.git
```
 
### Setup Angular Project:
Open a terminal or command prompt and go to angular-module
```sh
$ cd CRUD/angCrud
```

Install node dependencies
```sh
$ npm install
```

Run the angular server (Optional: required during development only)
```sh
$ ng serve
```
Do not close this terminal

See check to see if it works in the browser (Optional: It is required during front-end development only)

[http://localhost:4200](http://localhost:4200/)


### Setup Laravel Project:

Open a new Terminal and go to laravel-module
```sh
$ cd CRUD/larCrud
```

Install composer dependencies
```sh
$ composer install
```

Create an .env file and copy the contents of .env.example into it
```sh
$ copy .env.example .env
```


Change the database credentials of .env files (make sure to create a database in mysql)
```
DB_DATABASE = your_database_name
DB_USERNAME = your_database_username
DB_PASSWORD = your_database_password
```

Generate application keys
```sh
$ php artisan key:generate
```

Run the database migration
```sh
$ php artisan migrate
```

Run the angular server
```sh
$ php artisan serve
```


See check to see if it works in the browser

[http://localhost:8000](http://localhost:8000/)


