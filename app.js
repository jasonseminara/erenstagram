const express = require('express');
const app = express();
const PORT = process.env.process || 3000;
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');
const postRouter = require('./routes/postRouter');
const logger = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landingpage');
})

app.use('/', postRouter);


app.listen(PORT, () => {
  console.log(`Server up..`);
});