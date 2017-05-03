var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config');

var usersCtrl = require('./modules/usersCtrl');
var vehiclesCtrl = require('./modules/vehicleCtrl');

//Need to enter username and password for your database

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var connectionString = "postgres://" + config.dbUser + ":" + config.dbPassword + "@localhost/" + config.database;
var instance = massive.connectSync({
  connectionString: connectionString
});
// console.log('instance', instance);

app.set('db', instance);
app.get('/seed/users', usersCtrl.seedUsers);
app.get('/seed/vehicles', vehiclesCtrl.seedVehicles);

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/user/:userId/vehiclecount', usersCtrl.getVehicleCount);
app.get('/api/user/:userId/vehicle', usersCtrl.getUserVehicle);
app.post('/api/users', usersCtrl.createUser);
app.put('/api/users', usersCtrl.updateUser);
app.delete('/api/user/:userId/vehicle/:vehicleId', usersCtrl.removeVehicle);

app.get('/api/vehicles', vehiclesCtrl.getVehicles);
app.get('/api/vechicle?userFirstStart=letters', vehiclesCtrl.filterByLetter);
app.get('/api/vehicle', vehiclesCtrl.getEmailVehicle);//?UserEmail=email
app.get('/api/newervehiclesbyyear', vehiclesCtrl.newerByYear);
app.post('/api/vehicles', vehiclesCtrl.createVehicle);
app.put('/api/vehicles', vehiclesCtrl.updateVehicle);
app.put('/api/vehicle/:vehicleId/user/:userId', vehiclesCtrl.updateOwner);
app.delete('/api/vehicle/:vehicleId', vehiclesCtrl.deleteVehicle);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

module.exports = app;
