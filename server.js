import dbConfig from '../config/ database.config';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';


// create express app
const app = express();

// parse requests of content-type  - application/ x-www-form-urlencoed
app.use(bodyParser.urlencoded({ extended: true}));


// Configuring the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//     console.log("Successfuly connected to the databse");
// }).catch( err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });


//parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({'message': 'welcome to the perfill-Backend API'});
});

//listen to the backend

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;