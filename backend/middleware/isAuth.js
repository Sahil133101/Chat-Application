import jwt from "jsonwebtoken";
const isAuth  =  async (req, res,next) => {
try {
const token  = req.cookies.token;

if(!token){
    return res.status(401).json({ message: 'User not authenticated' });
}
const decode =  await jwt.verify(token,process.env.JWT_SECRET_KEY) 
console.log(decode);
if(!decode){
    return res.status(401).json({ message: 'Token is not valid' });
 
};

req.id =  decode.userId;
next();



}
catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Authentication failed' });
}
}

export default isAuth;

const req = {
    id: "",
}
req.id = " sjfnkczl"