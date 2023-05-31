# Instructions of the project #
|           #             |   **Instructions**      |
|-------------------------|-------------------------|
| Step-1                  |   [Setup React project](#q1)<br>[Setup Laravel project](#q2)<br>|
| Step-2                  | [Api explination](#q10)<br>|
| Step-3                  | [Configure Thunder for api testing](#q20)<br>|


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

## Q10
**Login API**
```
  http://127.0.0.1:8000/api/login [method=post]
```
To check if the user is authenticated or not and also generate a unique token

**Create Product**
Only authenticate user can execute the following operations. One more thing after login please place the unique token for the execute the operation
```
  http://127.0.0.1:8000/api/products [method=post]
```
**Product List**
```
  http://127.0.0.1:8000/api/products [method=get]
```
**Product Edit**
```
  http://127.0.0.1:8000/api/products/{$id} [method=put]
```
**Product Delete**
```
  http://127.0.0.1:8000/api/products/{$id} [method=delete]
```
**List of Supplier**
```
  http://127.0.0.1:8000/api/current_user_all_products
```
This api provide all of supplier associate with products

**List of products particular supplier**
```
  http://127.0.0.1:8000/api/current_user_all_products?user_id={$id} [method=get]
```
Here ```user_id``` will be supplier id

**Purchase product**
```
  http://127.0.0.1:8000/api/purchases [method=post]
```

## Q20
First install Thunder client extension to vscode

![](https://github.com/muhammadsanwarulislam/Sokrio_Laravel/blob/main/Thunder%20Configuration/1.png)

Import ```thunder-collection_API.json```

![](https://github.com/muhammadsanwarulislam/Sokrio_Laravel/blob/main/Thunder%20Configuration/2.png)

Create ```env```

![](https://github.com/muhammadsanwarulislam/Sokrio_Laravel/blob/main/Thunder%20Configuration/3.png)

![](https://github.com/muhammadsanwarulislam/Sokrio_Laravel/blob/main/Thunder%20Configuration/4.png)
