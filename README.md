# AngularNgrxVEight

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Important to run this one:

```
npm install rxjs-compat --save
```

# Implementation

## Add bootstrap

1. Installation

```
   npm install bootstrap --save

   and install its dependencies

   npm i jquery --save
   npm i popper.js --save
```

2. Add Bootstrap to angular.json

```
"apps": [{
  ...,
  "styles": [
     "../node_modules/bootstrap/dist/css/bootstrap.min.css",
     "styles.css"
  ],
  "scripts": [
     "../node_modules/jquery/dist/jquery.min.js",
     "../node_modules/popper.js/dist/umd/popper.min.js"
     "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
}]
```

be sure bootstrap script is loaded after jquery and popper

## Update The routing

inside app-routing.module.ts update

```
const routes: Routes = [
  { path: "", redirectTo: "/user-list", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];
```

create PageNotFound component that will handle bad routes

```
   ng g c page-not-found
```

## Add home and users modules

lets create two more modules - home and users

we will use the cli commands:

```
ng g m pages/home --module app
ng g m pages/users --module app --routing
```

which means:

- generate new module inside ./pages
- `--routing` option adds routing module to the newly created module
- register the new module in the `app` module

We are storing our pages inside ./pages folder

<!-- inside app.component.html -->

We are using <router-outlet> as the main entry point for the components loaded by the routes

Everything outside the <router-outlet> is static (the navbar)

We are running the following two commands:

## Add home and users components

ng g c pages/users/user-list --module pages/users
ng g c pages/users/user-details --module pages/users

which will do the following:

- generate new components inside the /users module
- the newly created components are registered inside the users pages/users module

we will generate a component for the home page. It doesn't have to be inside its own folder
as it will be the only component for this module as opposite to the users module where we are having
at least two components

```
ng g c pages/home --module pages/home
```

the newly created structure should look like this:

```
>pages
 >home
  >home-routing.module.ts
  >home.componen.ts
  >home.module.ts
 >users
  >user-details
   >user-details.component.ts
  >user-list
   >user-list.component.ts
  users.routing.module.ts
  users.module.ts
```

## Add lazy loading and routing for the home and users modules

important to know is that AppRoutingModule should be loades after the HomeModule and UsersModule. The more specific routes should be placed on top. The first route to match will be the one to be executed. This is why route with common scenarios like "" or "\*\*" should be at the bottom.
for more information: https://angular.io/guide/router#set-up-redirects

The routes for home module:

```
const routes: Routes = [
  {path:"home", component: HomeComponent}
];
```

the routes for users module

```
const routes: Routes = [
  { path: "user-list", component: UserListComponent },
  { path: "user-details/:id", component: UserDetailsComponent }
];
```

## Add services

```
ng g s services/user-services
```

inside `services` folder we will store our shared services
we will load mocked users data from user-data.mock.ts

## Adding Store

```
  npm install @ngrx/store --save
```

for angular 6+ we can just run

```
  ng add @ngrx/store
```

adding debut tool

```
  @ngrx/store-devtools
```

inside app.module.ts

```
imports: [
  ...
  StoreModule.forRoot({}),
  StoreDevtoolsModule.instrument({
    maxAge: 25 // Retains last 25 states
  }),
  ...
]
```

we will initialize empty store because the store data will be loaded lazily

## Add effects

```
npm install @ngrx/effects --save
```
