const express = require('express')
//const bcrypt = require('bcrypt')

const Joi =require('joi')
const Router = express.Router()
var mysqlConnection = require('../connection/connection')

Router.post('/', function(req, res) {
  

    const {NIC,age,gender,height,weight,vaccine_type,blood_group,living_area}=req.body;
    console.log(req.body);

    //server side validation

    const schema = Joi.object({

        NIC:Joi.string().required(),
        age: Joi.number().integer().positive().required(),
        gender:Joi.string().required(),
        height:Joi.number().positive().required(),
        weight:Joi.number().positive().required(),
        vaccine_type:Joi.string().required(),
        blood_group:Joi.string().required(),
        living_area:Joi.string().required(),
    });

    const result = schema.validate(req.body);

    if(result.error){

        res.status(400).send(result.error.details[0].message);
        return;
    }


    mysqlConnection.query('insert into UserFormData (NIC,age,gender,height,weight,vaccine_type,blood_group,living_area) values(?,?,?,?,?,?,?,?);',
    [NIC,age,gender,height,weight,vaccine_type,blood_group,living_area],(error,rows,fileds)=>{
        if(!error){
            res.json({Status:'Successful'});
        }else{
            console.log(error);
        }


    })
    
})

  module.exports = Router



