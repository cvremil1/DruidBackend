const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.COGNITO_REGION }); 
const cognito = new AWS.CognitoIdentityServiceProvider();



const login = async (req, res) => {
    const { username, password } = req.body;
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.COGNITO_CLIENT_ID, 
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        }
    };

    try {
        const response = await cognito.initiateAuth(params).promise();
        const authenticationResult = response.AuthenticationResult;
        res.status(200).json({message:"login sucessfully",data:{
            idToken:authenticationResult.IdToken,
            accessToken:authenticationResult.AccessToken,
            refreshToken:authenticationResult.RefreshToken,
            expiresIn:authenticationResult.ExpiresIn
        }})
    }catch(error){
        res.status(400).json({message:"login unsucessfully",error:error.message})
    }
  };
  


 
  module.exports = {
    login
  };