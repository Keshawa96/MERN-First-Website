const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/Connect');

const register = require('./Routes/registrationRoute');
const login = require('./Routes/loginRoute');
const userProfile = require('./Routes/userprofileRoute');
const adminuserprofile = require('./Routes/adminuserprofile');
const addgames = require('./Routes/addgameRoute');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/users' , register);
app.use('/login' , login);
app.use('/userprofile' , userProfile);
app.use('/adminuserprofile' , adminuserprofile);
app.use('/fileup' , addgames);