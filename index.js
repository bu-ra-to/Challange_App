const keys = require('./config/keys');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to DB');
});

require('./routes/challange')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("I'm Listenning");
});
