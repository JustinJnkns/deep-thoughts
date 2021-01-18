const jwt = require('jsonwebtoken')

const secret = 'mysecretsshhh'
const expiration = '2h'

module.exports ={
    signToken:function({username,email,_id}){
        const payload = {username,email,_id}
        return jwt.sign({data:payload},secret,{expiresIn:expiration})
    },
    authMiddleware: function({req}){
        // allows token to be sent via req. bod, req.query, or headers
        let token = req.body.token||req.query.token|| req.headers.authorization
        // separate "bearer" from "<tokenvalue>"
        if(req.headers.authorization){
            token = token
            .split(' ')
            .pop()
            .trim()
        }
        // if no teoken,return request object as is
        if(!token){
            return req
        }
        try{
            // decode and attach user data to request object,  If the secret on jwt.verify() doesn't match the secret that was used with jwt.sign(), the object won't be decoded user will still be able to make requests
            const{data} =jwt.verify(token,secret,{maxAge:expiration})
            req.user =data
        } catch{
            console.log('Invalid token')
        }
        // return updated request obj
        return req
    }
}