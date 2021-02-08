# Angular-Shopping-Project
 Basic shopping project with Angular

Hi everyone!

This project is a simple shopping site developed with Angular. There is a json file with products and categories in the "db" folder. The other folder has Angular side of the project. To run the project without any problems, you need to follow some steps.

1- First, you need to go to the "shop" folder from the terminal and install the Node modules used in the project.
> cd shop
> npm install

2- Then, you need to go to the "db" folder from the terminal and launch json-server. Thus, a fake API is created for the project and the services start running.
> cd db
> json-server --watch shop.json

3- Finally, we will run the project on localhost.
> ng serve --open

WARNING!
To add products, you need to login as admin. Enter the username as "admin" and password as "12345" to login. You can change this from the code. Your browser may give a "change your password" or "your password may be stolen" warning because your login information is saved in your browser's local storage. Don't mind this as it runs on localhost.
