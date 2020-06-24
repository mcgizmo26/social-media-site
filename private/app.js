// *********************************** App Variables *******************************
const express = require('express');
const passport = require('passport');

const config = require('./config');
const routes = require('./routes/routes');
const secureRoutes = require('./routes/secure-routes');


// *********************************** Use Middleware ******************************
const app = express();
require('./auth/auth');
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());


// *********************************** Routes **************************************
app.use('/authenticate', routes);
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoutes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

// *********************************** Start Server ********************************
app.listen(config.port, () => {
    console.log('Server started')
});