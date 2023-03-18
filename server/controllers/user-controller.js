import User from "../model/user.js"


export const adduser = async(req,res)=>{
try {
    let userExist = await User.findOne({sub: req.body.sub})
    if(userExist){
        res.status(200).json({msg:"user already exist"})
        return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser)
} catch (error) {
    return res.status(500).json(error.message)
}
}