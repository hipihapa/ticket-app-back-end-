import jwt from "jsonwebtoken"

export const validateToken = async (req, res, next) => {
    let token;
    let authHead = req.headers.authorization || req.headers.Authorization;
    if (authHead && authHead.startsWith("Bearer")) {
        token = authHead.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({msg: "Unathourized request"})
            }
            req.user = decoded.user;
            next();
        });
    }else{
        res.status(403).json({msg: error.message});
    }
}