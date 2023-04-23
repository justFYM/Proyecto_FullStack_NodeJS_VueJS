import express from "express";
const router = express.Router();
import User from "../models/user";

const {verificarAuth,verificarAdministrador} = require('../middlewares/autentificacion');



const bcrypt = require('bcrypt');
const saltRounds = 10;


const _ = require('underscore');


router.post('/nuevo-usuario',async(req,res)=>{  
    const body = {
        nombre: req.body.nombre,
        role: req.body.role
    } 
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

    try {
    const usuarioDB= await User.create(body)
    res.json(usuarioDB) 
        
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error',
            error
        })
        
    }


})

router.put('/usuario/:id', [verificarAuth,verificarAdministrador], async(req,res)=>{
    const _id=req.params.id;  
    const body = _.pick(req.body, ['nombre','pass','activo'])
    if(body.pass){
        body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

    }



    try {
        const usuarioDB = await User.findByIdAndUpdate(_id, body, {new: true, runValidators: true}) 
        return res.json(usuarioDB);
        
    } catch (error) {
        return res.status(400).json({ 
            mensaje: 'Ocurrió un error',
            error
        })
        
    }




})



module.exports = router; 