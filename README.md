This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Perfecto

## Available Scripts

nvm list
use version 16

In the project directory, you can run:

### USING NPM

### `npm i`

### `npm run dev`

### Create distribution

`npm run build`

### docker files ###

docker build . -t shopizerecomm/shopizer-shop:latest

docker run \
-e "APP_MERCHANT=DEFAULT" \
-e "APP_BASE_URL=http://localhost:8080" \
-it --rm -p 80:80 shopizerecomm/shopizer-shop-reactjs

http://localhost

## Change theme color

change env file
APP_THEME_COLOR=#7c515d


default language is in rootReducer
