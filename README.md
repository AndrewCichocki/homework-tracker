# Homework Tracker
A simple CRUD app using Node, React and Postgres.

## Getting Started
Make sure you have Node and Postgres installed.

1. Create a '.env' file in the root directory of the project with the following values:
```
DB_USER=username
DB_HOST=localhost
DB_NAME=homework-tracker
DB_PASS=password
DB_PORT=5432
```
2. Create a new table named 'homework-tracker' (or whatever you named it earlier).
3. Run server/schema.sql in pgAdmin.
4. Install all packages by running the 'yarn' command in the root directory.
5. Run the following commands in two separate terminal windows:
```
yarn start:server
yarn start:client
```
6. Visit localhost:1234 to use the client. The server will be running on localhost:3000.

## Built With
* [Material-UI] (https://next.material-ui.com) - Common UI components
* [material-table] (https://material-table.com) - Editable table
* [Unstated] (https://github.com/jamiebuilds/unstated-next) - React state management
* [Koa] (https://koajs.com) - Node framework
* [Parcel] (https://parceljs.org) - Web app bundler

## Roadmap
* Add validation
* Add more pages
* Add unit tests