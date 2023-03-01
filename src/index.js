const path = require('path');
const express = require('express');
const app = express();
const { json } = require('express');
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(json());

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log('listening on port ' + port);
});