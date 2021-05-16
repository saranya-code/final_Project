const mongoose = require("mongoose");
const db = require("../models");

// Still working on product seed files. Will request products for all store fronts
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/onlineproducts"
);

const userSeed = [
  {
    name: "Luke Paschka",
    email: "lpaschka@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Kelsie Lewis",
    email: "klewis@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Nathan Henteges",
    email: "nhenteges@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Saranya Dayalan",
    email: "sdayalan@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  }

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// Users:
// username
// password
// email
// phone
// address

const productsSeed = [
  {
    productImage: "queso.png",
    productName: "Queso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",    
    price: 2.49,
    seller: "Garyphanalia",
    rating: 5,
    category: "Food"
  }
];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
