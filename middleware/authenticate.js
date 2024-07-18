const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');

AWS.config.update({ region: process.env.COGNITO_REGION,});

const authenticateToken = async (req, res,next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }
    const tokenString = token.split(' ')[1];
    if (!tokenString) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
    try {
        const decodedToken = jwt.decode(tokenString, { complete: true });
        req.user = decodedToken.payload;
        next();
    } catch (error) {   
        res.status(400).json({ message: 'Invalid token.' });
    }
}



module.exports = {
    authenticateToken,
  };