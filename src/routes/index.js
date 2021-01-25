const express = require('express');
const router = express.Router();

module.exports = app => {

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/cargar-y-verificar', (req, res) => {
        console.log(res.body)
        res.render('cargar-y-verificar');
    });

    router.post('/cargar-y-verificar', (req, res) => {

        console.log(req.body)
        console.log(req.file);
        res.render('cargar-y-verificar');
    });

    app.use(router);
}