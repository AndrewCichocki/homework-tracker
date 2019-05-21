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
2. Create a new table named 'homework-tracker' (or whatever you named it earlier)
3. Run schema.sql
4. Run the following commands in two separate terminal windows:
```
yarn start:client
yarn start:server
```
5. Visit localhost:1234 to see the client, the server will be running on localhost:3000

## Built With
* [Material-UI] (https://next.material-ui.com) - Common UI components
* [material-table] (https://material-table.com) - Editable table
* [Unstated] (https://github.com/jamiebuilds/unstated-next) - React state management
* [Koa] (https://koajs.com) - Node framework
* [Parcel] (https://parceljs.org) - Web app bundler