const mongoose = require("mongoose");
// Middleware
//const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
const MONGO_URI ='mongodb+srv://admin:tanu%40123@mycluster.tuatekq.mongodb.net/BookStore?retryWrites=true&w=majority&appName=mycluster'
// // Connect to MongoDB using the connection string
mongoose.connect(MONGO_URI).then(() => {
   console.log(`Connection successful`);
 }).catch((e) => {
   console.log(`No connection: ${e}`);
 });

// // mongodb://localhost:27017 



//const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/BookStore', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//});
