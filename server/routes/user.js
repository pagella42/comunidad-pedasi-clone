const express = require('express')
const router = express.Router()
const User = require('../schemas/User')

router.post('/data/user',(req,res)=>{
    let user = new User(req.body)
    user.ban=false
    user.save()
    res.end()
})
router.get('/data/user/:usersPhone',(req,res)=>{
    User.findOne({phone:req.params.usersPhone})
    .populate('posts')
    .exec((err,user)=>res.send(user))
})
router.put('/data/user/:usersPhone',(req,res)=>{
    User.findOneAndUpdate({phone:req.params.usersPhone},{
        $set:{[req.body.key]:req.body.value}
    },(()=>res.end()))
})
router.get('/data/users', (req,res)=> {
    User.find({}, (error, response) => res.send(response) )
})






module.exports= router