// all express configuration on app.js conveation
const express = require ('express');
const userRouter = require ('./routes/userRouter');
const fileRouter = require ('./routes/fileRouter');
const folderRouter = require ('./routes/folderRouter');
const app = express ();
app.use (express.json ());
app.use ('/api/v1/user', userRouter);
app.use ('/api/v1/folder', folderRouter);
app.use ('/api/v1/file', fileRouter);
module.exports = app;
