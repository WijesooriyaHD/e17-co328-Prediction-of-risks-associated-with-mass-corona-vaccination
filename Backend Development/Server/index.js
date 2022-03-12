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
const formroute = require('./src/routes/form')


app.use('/form',formroute);



//startung the server
app.listen(app.get('port'),()=>{
    console.log('serevr on port',app.get('port'));
});