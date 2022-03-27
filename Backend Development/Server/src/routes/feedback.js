const express = require('express')
//const bcrypt = require('bcrypt')

const Joi =require('joi')
const Router = express.Router()
var mysqlConnection = require('../connection/connection')

Router.post('/', function(req, res) {
  

    const {NIC,Swelling,Redness,Itching,Fever,Headache,Muscle_Pain,Tiredness,Coughing,
        Diarrhea,Nausea_and_vomiting,Breathlessness,Joint_Pain,Fainted,Anaphylactic_Reaction,
        Tingling,Swollen_Lymph_Nodes}=req.body;
    console.log(req.body);

    //server side validation

    const schema = Joi.object({

        NIC:Joi.string().required(),

        Swelling:Joi.string().required(),
        Redness:Joi.string().required(),
        Itching:Joi.string().required(),
        Fever:Joi.string().required(),
        Headache:Joi.string().required(),
        Muscle_Pain:Joi.string().required(),
        Tiredness:Joi.string().required(),
        Coughing:Joi.string().required(),
        Diarrhea:Joi.string().required(),
        Nausea_and_vomiting:Joi.string().required(),
        Breathlessness:Joi.string().required(),
        Joint_Pain:Joi.string().required(),
        Fainted:Joi.string().required(),
        Anaphylactic_Reaction:Joi.string().required(),
        Tingling:Joi.string().required(),
        Swollen_Lymph_Nodes:Joi.string().required(),
    
    });

    const result = schema.validate(req.body);

    if(result.error){

        res.status(400).send(result.error.details[0].message);
        return;
    }


    mysqlConnection.query('insert into UserFeedbackData (NIC,Swelling,Redness,Itching,Fever,Headache,Muscle_Pain,Tiredness,Coughing,Diarrhea,Nausea_and_vomiting,Breathlessness,Joint_Pain,Fainted,Anaphylactic_Reaction,Tingling,Swollen_Lymph_Nodes) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
    [NIC,Swelling,Redness,Itching,Fever,Headache,Muscle_Pain,Tiredness,Coughing,
        Diarrhea,Nausea_and_vomiting,Breathlessness,Joint_Pain,Fainted,Anaphylactic_Reaction,
        Tingling,Swollen_Lymph_Nodes],(error,rows,fileds)=>{
        if(!error){
            res.json({Status:'Successful'});
        }else{
            console.log(error);
        }


    })
    
})

  module.exports = Router



