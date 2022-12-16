const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise;
const dbName = 'Dashboard';  // Nom de votre BDD
const dbUrl = `mongodb://0.0.0.0:27017/${dbName}`;

// Connecting to the db
mongoose.connect(dbUrl, {
    useNewUrlParser: true

});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



const tachesRouter = require('./routes/taches');
const eventsRouter = require('./routes/events');

app.use('/taches', tachesRouter);
app.use('/events', eventsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});