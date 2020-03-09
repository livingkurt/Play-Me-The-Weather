var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  consolidate = require('consolidate'),
  swig = require('swig'),
  bodyParser = require('body-parser');
  
require('./services/passport')
var app = express();

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(__dirname + '/public'));

app.engine('html', consolidate.swig);

require('./routes/authRoutes')(app)

app.listen(5000);