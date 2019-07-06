const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser')

const upload = multer();
const app = express();

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());


const routes = require('./routes.js');
app.get('/', routes.getAllHandler);
app.get('/:id', routes.getHandler);
app.post('/', routes.postHandler);

const  port = process.env.PORT || 3000;

app.listen(port, ()=> {console.log('Server is running at port 30000')});