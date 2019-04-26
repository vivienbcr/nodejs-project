# API Nodejs

## launch

``` bash
npm install
sudo npm install -g nodemon
nodemon app.js
```

## Routes

```html
/blocks (need auth)
GET : List all block in DB
POST : Create newBlock in DB

/block/:blokid
GET : read_a_block in DB
PUT : update_a_block in DB
DELETE : delete_a_block in DB

/register
POST : ("email" : "myemail@gmail.com", "password" : "password")
add user in DB
/login
POST : ("email" : "myemail@gmail.com", "password" : "password")
receive jwtoken

_________________

/lastBlock
GET :  Last block infos

/lastTransactions
GET : Last 10 transactions

/unspend/:address
GET : Unspend bitcoin on wallet

/init-pools
GET : get pools stats, push it in mongodb
```

## Features

* Bcrypt for password encryption

* REGEX to check valid email forma

## Web Socket

Client connect on websocket and provide bitcoin wallet list.
Server return balance on this wallets