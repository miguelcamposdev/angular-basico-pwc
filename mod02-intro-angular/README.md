# Mod02IntroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## VSCode Plugins

[Angular Snippets (Version 12)](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) 
[Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) 

## Recursos

[JSON to TS](http://json2ts.com/) 
[JSON Placeholder: users](https://jsonplaceholder.typicode.com/users)

## LABORATORIO 1

Se pide crear una tabla  (nuevo componente tabla-posts) como la que hemos implementado. La tabla debe mostrar un listado de POSTS: [tomar este ejemplo de datos](https://jsonplaceholder.typicode.com/posts).
1. Añadir a los datos de ejemplo un campo un campo rate, que será un número entre 0 y 10, que será la valoraciónd el post.
2. Se debe crear la interface Post, haciendo uso de la herramienta online Json2ts
3. Crear un componente rating-bar, que muestre una barra de progreso de un post, en base a su valoración. Para ello, hay que hacer el que el componente hijo reciba un parámetro "post". Para la barra de progreso, se puede utilizar el siguiente componente de Material: [Progress-bar](https://material.angular.io/components/progress-bar/overview)
4. En este componente progress-bar, deberán aparecer también 2 botones para subir o bajar la valoración del post. Dicho cambio, se deberá comunicar al componente padre tabla-posts, que lo utilizará para calcular la media de la valoración de los posts.