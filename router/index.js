module.exports = function (app) {
    app.use('/', require('./routes/index'));
    app.use('/users', require('./routes/users'));
    app.use('/demo', require('./routes/demo'));
}
