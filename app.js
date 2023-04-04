const express = require('express');
const app = express();
const agoraToken = require('./agoraToken');

// Endpoint to generate an Agora token
app.get('/generateToken', (req, res) => {
  
  // const { appId, appCertificate, channelName, uid } = req.query;

  // console.log(appId);
  // console.log(appCertificate);
  // console.log(channelName);
  // console.log(uid);
  
  const token = agoraToken.generateToken();

  // Return the token as the response
  res.send(token);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
