const jwt = require('jsonwebtoken');
const JWT_SECRET = 'RAKESH_JWT_SECRET';

function setUser(user) {
    return jwt.sign({
        _id : user._id,
        email : user.email_Id,
        role : user.role
    }, JWT_SECRET);
}

function getUser(token) {
    if(!token) return null;
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {setUser, getUser};