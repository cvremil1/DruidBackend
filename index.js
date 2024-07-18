require('dotenv').config();
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const siteRouter = require('./routes/siteRouter');
const PORT = process.env.PORT ||8000;


app.use(express.json())



 app.use('/user',userRouter);
 app.use('/site',siteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });