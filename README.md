<h1 align="center">E-Commerce Back-End</h1>
<h2 align="center">Express, Node.js, and Sequelize (MySQL)</h2>

## Description

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](http://choosealicense.com/licenses/mit/)

This application provides the ability to interact with Products, Categories, and Product Tags in a MySQL database via Express API routes. The application supports Creating, Retrieving, Updating, and Deleting entities. A video walkthrough of the application's functionality can be found here:

- [Walkthrough](https://www.screencast.com/t/Siwcip8xl)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Tag API](#get-all-tags)
  - [Category API](#get-all-categories)
  - [Product API](#get-all-products)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

This application makes use of the following Node.js packages:

- [express](https://www.npmjs.com/package/express) for running the API server
- [mysql2](https://www.npmjs.com/package/mysql2) for executing MySQL database queries
- [sequelize](https://www.npmjs.com/package/sequelize) for connecting to the MySQL database
- [dotenv](https://www.npmjs.com/package/dotenv) for access to custom environment variables for sensitive data

Run `npm i` with the included `packages.json` file to install the required packages.

## Usage

To create the schema and seed the tables, execute the following commands:

- Connect to MySQL shell and run `SOURCE db/schema.sql` to create the database schema
- Run `node server.js` to start the server and sync the Sequelize models to the MySQL database
- Run `node seeds/index.js` to seed the tables

### REST API

The REST API to interact with Tags, Categories and Products is described below.

#### Get all Tags

##### Request

`GET /api/tags`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    []

#### Get a specific Tag

##### Request

`GET /api/tags/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":1,"tag_name":"rock music","products":[{"id":3,"product_name":"Branded Baseball Hat","price":23,"stock":12,"category_id":4,"product_tag":{"id":5,"product_id":3,"tag_id":1}},{"id":4,"product_name":"Top 40 Music Compilation Vinyl Record","price":13,"stock":50,"category_id":3,"product_tag":{"id":9,"product_id":4,"tag_id":1}}]}

#### Create a new Tag

##### Request

`POST /api/tags`

    {"tag_name":"Euro"}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":9,"tag_name":"Euro"}

#### Update a specific Tag

##### Request

`PUT /api/tags/:id`

    {"tag_name":"Classic"}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

#### Delete a specific Tag

##### Request

`DELETE /api/tags/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

#### Get all Categories

##### Request

`GET /api/categories`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    []

#### Get a specific Category

##### Request

`GET /api/categories/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":1,"category_name":"Shirts","products":[{"id":1,"product_name":"Plain T-Shirt","price":15,"stock":14,"category_id":1}]}

#### Create a new Category

##### Request

`POST /api/categories`

    {"category_name":"Games"}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":6,"category_name":"Games"}

#### Update a specific Category

##### Request

`PUT /api/categories/:id`

    {"category_name":"Board Games"}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

#### Delete a specific Category

##### Request

`DELETE /api/categories/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

#### Get all Products

##### Request

`GET /api/products`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    []

#### Get a specific Product

##### Request

`GET /api/products/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":1,"product_name":"Plain T-Shirt","price":15,"stock":14,"category_id":1,"category":{"id":1,"category_name":"Shirts"},"tags":[{"id":6,"tag_name":"white","product_tag":{"id":1,"product_id":1,"tag_id":6}},{"id":7,"tag_name":"gold","product_tag":{"id":2,"product_id":1,"tag_id":7}},{"id":8,"tag_name":"pop culture","product_tag":{"id":3,"product_id":1,"tag_id":8}}]}

#### Create a new Product

##### Request

`POST /api/products`

    {"product_name":"Battleship","price":15.00,"stock":9,"category_id":6,"tagIds":[]}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

    {"id":6,"product_name":"Battleship","price":15,"stock":9,"category_id":6}

#### Update a specific Product

##### Request

`PUT /api/products/:id`

    {"product_name":"Jumanji","price":35.00,"stock":7,"tagIds":[9]}

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

#### Delete a specific Product

##### Request

`DELETE /api/products/:id`

##### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Date: Thu, 16 Sep 2021 22:00:25 GMT

## License

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](http://choosealicense.com/licenses/mit/)

This application is covered under the MIT license. Information about this license can be found [here](http://choosealicense.com/licenses/mit/).

## How to Contribute

[MichaelHermes](https://github.com/MichaelHermes)

## Questions?

Find me on [Github](https://github.com/MichaelHermes) or email me at [mikehermes87@gmail.com](mailto:mikehermes87@gmail.com).
