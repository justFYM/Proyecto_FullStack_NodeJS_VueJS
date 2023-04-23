import express from "express";
const router = express.Router();
const jwt = require('jsonwebtoken');


import User from "../models/user";

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', async(req,res)=>{
    
    const body = req.body; 

    try {
 
        const usuarioDB = await User.findOne({nombre: body.nombre})
        if(!usuarioDB){
            return res.status(400).json({ 
                mensaje: 'Nombre no encontrado',
            })
        }

        if(!bcrypt.compareSync(body.pass, usuarioDB.pass)){ 
            return res.status(400).json({
                mensaje: 'Contraseña no encontrada',
            })  
        }

        const token = jwt.sign({
            data: usuarioDB
          }, 'secret', { expiresIn: 60 * 60 * 24 * 30}); 


        res.json({
            usuarioDB,
            token: token
        })




    } catch (error) {
        return res.status(400).json({ 
            mensaje: 'Ocurrió un error',
            error
        })
        
    }

})
module.exports = router;