const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

const http = require('http');
const socketIO = require('socket.io');

// Routes
const usersRouter = require('./routes/users');
const communitiesRouter = require('./routes/communities');
const propertiesRouter = require('./routes/properties');
const gkaTokenRouter = require('./routes/gkaToken');
const xmlGeneratorRouter = require('./routes/xmlGenerator');
const fileToAWSRouter = require('./routes/fileToAWS');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = require('./config/keys').mongoURI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successully');
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use('/users', usersRouter);
app.use('/properties', propertiesRouter);
app.use('/communities', communitiesRouter);
app.use('/gkatoken', gkaTokenRouter);
app.use('/xmlgenerator', xmlGeneratorRouter);
app.use('/upload', fileToAWSRouter);

// Start Server with Socket IO
const server = http.createServer(app);
const io = socketIO(server);
app.set('io', io);

server.listen(port, () => {
    console.log('Server is running on port:', port);
})