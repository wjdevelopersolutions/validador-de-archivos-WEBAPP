const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const multer = require('multer');
const exphbs = require('express-handlebars');

const routes = require('../routes');
const helpers = require('./helpers');

module.exports = app => {
	
	// Configs
	dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });
	app.set('port', process.env.PORT);
	app.set('env', process.env.NODE_ENV);

	// Express Handlebars
	app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layout'),
        extname: '.hbs',
        helpers: helpers
    }));
    app.set('view engine', '.hbs');

    app.use(multer({
        dest: path.join(__dirname, '../public/upload/temp')
    })
    .single('archivo'));

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/public', express.static(path.join(__dirname, '../public')));

	routes(app);
	return app;
}