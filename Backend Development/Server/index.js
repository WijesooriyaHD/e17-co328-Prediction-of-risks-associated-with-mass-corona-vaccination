const express = require('express');
const cors=require('cors')

//initialize the app
const app = express();
app.use(cors())

//settings
app.set('port',process.env.PORT || 8000);

//middleware
app.use(express.json());

//routes

//const signuproute = require('./src/routes/signup')
const formroute = require('./src/routes/form')
const feedbackroute = require('./src/routes/feedback')


app.use('/form',formroute);
app.use('/feedback',feedbackroute);



//startung the server
app.listen(app.get('port'),()=>{
    console.log('serevr on port',app.get('port'));
});