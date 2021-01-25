const express = require('express');
const server = require('./server');
const app = server(express());

const port = app.get('port');

app.listen(
	port,
	console.log(`Server running on port ${port}`)
);