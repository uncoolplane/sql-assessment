module.exports = {
  seedVehicles : function(req, res, next) {
    var db = req.app.get('db');
    db.vehicle_create_seed(function(err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  getVehicles: function (req, res, next) {
    var db = req.app.get('db');
    console.log('getVehicles');
    db.select_vehicles(function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  filterByLetter:  function (req, res, next) {
    var db = req.app.get('db');
    var letter = substring(req.query.userFirstStart, 0, 1);
    console.log('filterByLetter', letter);
    db.filter_letter([letter], function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  getEmailVehicle: function (req, res, next) {
    var db = req.app.get('db');
    var email = req.query.UserEmail;
    var letter = req.query.userFirstStart;
    console.log('getEmailVehicle', email);
    console.log('getEmailVehicle(letter)-->', letter);
    if(email) {
      db.vehicle_email([email], function (err, response) {
        if(err) {
          res.send(err);
          return;
        }
        console.log(response);
        res.send(response);
      })

    } else {
      db.filter_letter([letter + '%'], function (err, response) {
        if(err) {
          res.send(err);
          return;
        }
        console.log(response);
        res.send(response);
      })

    }
  },
  newerByYear: function (req, res, next) {
    var db = req.app.get('db');
    db.newer_vehicle(function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  createVehicle: function (req, res, next) {
    var db = req.app.get('db');
    var vehicle = req.body;
    console.log('node\\createVehicle', vehicle);

    db.insert_vehicle([vehicle.make, vehicle.model, vehicle.year, vehicle.ownerid], function(err, response) {
      if(err) {
        console.log('createVehicle', response, err);
      }
      res.send(response);
    })
  },
  updateVehicle: function(req, res, next) {
    var db = req.app.get('db');
    db.update_vehicle([vehicle.make, vehicle.model, vehicle.year, vehicle.ownerid, vehicle.id], function(err, response) {
      if(err) {
        console.log('updateVehicle', response, err);
      }
      res.send(response);
    })
  },
  updateOwner: function (req, res, next) {
    var db = req.app.get('db');
    var vehicleId = req.params.vehicleId;
    var userId = req.params.userId;
    db.update_owner([userId,vehicleId], function (err, vehicle) {
      if(err) {
        console.log('createVehicle', vehicle, err);
      }
      res.send(vehicle);
    })
  },
  deleteVehicle: function (req, res, next) {
    var db = req.app.get('db');
    var vehicleId = req.params.vehicleId;
    console.log('deleteVehicle', vehicleId);
    db.delete_vehicle([vehicleId], function (err, response) {
      if(err) {
        console.log('createVehicle', response, err);
      }
      res.send({isSuccessful: true});
    })
  }
}
