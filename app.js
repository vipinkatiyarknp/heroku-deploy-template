var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var jsonToXML = require('./routes/json-xml');
var XMLtoJSON = require('./routes/xml-json');


var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded(
  { 
    extended: true 
  })); // support encoded bodies

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/json-xml', jsonToXML);
app.use('/xml-json', XMLtoJSON);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
  //var err = new Error('Not Found');
  //err.status = 404;
  //next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

port = 49152;
app.listen(port, function() {
	console.log("listening to port " + port);
})

module.exports = app;
