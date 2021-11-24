const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { SESSION_SECRET } = require('../config');

module.exports = (app) => {
//Enable cross-origin resource sharing

app.use(cors());

//parse raw data strings into JSON

app.use(bodyParser.json());

//parse URL-encoded data

app.use(bodyParser.urlencoded({extended:true}));

//creates a session

app.use(
    session({  
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
      }
    })
  );

  return app


}