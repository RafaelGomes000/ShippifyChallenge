require('dotenv').config();

const variavelTest = process.env.DB_USER;
console.log(variavelTest)

const express = require('express'), 
app = express();
bodyparser = require('body-parser');
require('express-async-errors')
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const db = require('./repositories/db'),
driverRoutes = require('./controllers/driver.controller');
vehicleRoutes = require('./controllers/vehicle.controller');

app.use(bodyparser.json())
app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
.then(() => {
    console.log('db connection succeded')
    app.listen(3306, () => console.log('server started at 3306'))
})
.catch(err => console.log('db connection failed. \n' + err));

