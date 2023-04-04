const express = require('express');
const app = express();
const token=require("./api/token")

app.use('/api/token',token)

// Start the server

const port=process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
