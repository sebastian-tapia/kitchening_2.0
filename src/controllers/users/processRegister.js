const { validationResult } = require("express-validator");
const db = require('../../database/models')
const {hashSync}=require('bcryptjs')

module.exports = (req,res) => {

    const errors = validationResult(req);
    const {name,surname,email,password,}=req.body
    if(errors.isEmpty()){
       db.User.create({
        name:name.trim(),
        surname:surname.trim(),
        email:email.trim(),
        password:hashSync(password,10),
        roleId:2
       }).then(user=>{
            console.log(user);
            db.Address.create({
                userId:user.id
            })
            .then(()=>{
                return res.redirect('/')
            })
       })
       .catch(error=>console.log(error))
    }else {
        return res.render('register',{
            old:req.body,
            errors:errors.mapped(),
            
        })
    }
    
 
}