# node-challenge-london-mini-guide

In this challenge you are going to build a full stack application (server & client) shows number of hospitals, doctors, pharmacies and colleges in number of london boroughs.

> for now there are data for only 3 cities.

- expected time: 4 - 20 hours

## live version:

- check this website: https://london-mini-guide-challenge.netlify.app/
- you don't need to know where the server is actually hosted.

## final project screenshot

![project screenshot](https://i.imgur.com/Or1tNpV.png)

## data source

- the data is provided to you in a folder `./data` which contains 3 files: `Harrow.json`, `Heathrow.json` and `stratford.json`.
- each file in this format:

  ```js
  {
      "pharmacies" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "colleges" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "doctors" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "hospitals" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ]
  }
  ```

- data source: https://www.yell.com/
- data has been collected using `web scraping` technique, if you are more curious about this please check [this repo](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city) or [this youtube video](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city). and this is completely optional.

## server

- you need to implement your server logic using `node.js`.

### server level 100

- make a new express server and deploy it to `repl.it` or `heroku`.
- on the route `/` respond with the routes you are planing to implement, example:

  ```js
  {
      "/pharmcies": "retruns an array of pharmacies in a specific area"
      ...
  }
  ```

### server level 200

- make your server working for only one city, example: `Stratford`
- in this level you should have 4 routes:

  |    route    |                result                 |
  | :---------: | :-----------------------------------: |
  | /pharmacies | returns pharmacies list for stratford |
  |  /colleges  |  returns colleges list for stratford  |
  |  /doctors   |  returns doctors list for stratford   |
  | /hospitals  | returns hospitals list for stratford  |

### server level 300

- now make your city dynamic.
- routes will change:

|       route       |              result               |
| :---------------: | :-------------------------------: |
| /:city/pharmacies | returns pharmacies list for :city |
|  /:city/colleges  |  returns colleges list for :city  |
|  /:city/doctors   |  returns doctors list for :city   |
| /:city /hospitals | returns hospitals list for :city  |

### server level 500

- make all of that in one single route as:

|      route       |              result              |
| :--------------: | :------------------------------: |
| /:city/:category | returns :category list for :city |

### server level 999

- you have the full control over this level.
- some suggestions:
  - add new cities.
  - add routes to add entries to our data.
  - make sure that you are saving the entered values to the `json` file.

## client

- you need to implement your client (or front-end) logic using `react.js`.

### client level 100

- display a title in the center.
- display the cities dropdown menu.
- display a categories' buttons.
- display table with dummy data.

### client level 200

- make sure that selecting a city will update the state.
- make sure that clicking on a specific category will activate it (distingush it from ither buttons).
- show an error if user tried to choose a category before chosing a city

![show an error if user tried to choose a category before chosing a city](https://i.imgur.com/vVPsMUe.png)

### client level 300

- make fetch request to your server on a specific city.
- choosing any categorey will display the data specified to thar city in the table.
- add loading spin while you're fetching your server.

### client level 500

- make city selection dynamic.
- selecting a city then selecting a category should displays the data of the selected city in the table.

### client level 999

- you have the full control over this level.
- some suggestions:
  - add a little page contains some data about each city.
  - form for adding more entries to the data.
