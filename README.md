# Instructions of the project #
|           #             |   **Instructions**      |
|-------------------------|-------------------------|
| Step-1                  |   [Setup React project](#q1)<br>[Setup Laravel project](#q2)<br>|
| Step-2                  | [Api explination](#q10)<br>|


## Q1
# Backend APP Or Admin Dashboard(React js) installations
Follow the steps mentioned below to install and run the project.
For both **dashboard** **admin**
1. Clone or download the repository
2. Run the command `npm install`
3. Run `npm run start` from the project root and visit `http://localhost:3000/` and `http://localhost:3030/`


## Q2
# Backend API(Laravel) installations
Follow the steps mentioned below to install and run the project.

1. Clone or download the repository
2. Go to the project directory and run `composer install`
3. Create `.env` file by copying the `.env.example`. You may use the command to do that `cp .env.example .env`
4. Update the database name and credentials in `.env` file
5. Run the command `php artisan migrate:fresh --seed`
6. If you get such kind of things 'Personal access client not found or Please create one' then run `php artisan passport:install`
7. Run the command `php artisan serve` to check api functionality
