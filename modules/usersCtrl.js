module.exports = {
  seedUsers : function(req, res, next) {
    var db = req.app.get('db');
    db.user_create_seed(function(err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  getUsers: function (req, res, next) {
    var db = req.app.get('db');
    db.select_users(function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);
    })
  },
  getVehicleCount: function (req, res, next) {
    var db = req.app.get('db');
    var userId = req.params.userId;
    console.log('getVehicleCount', userId);

    db.get_vehicle_count([userId], function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response[0]);
    })
  },
  getUserVehicle: function (req, res, next) {
    var db = req.app.get('db');
    var userId = req.params.userId;
    console.log('getUserVehicle', userId);
    db.get_user_vehicle([userId], function (err, response) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(response);

    })
  },
  createUser: function (req, res, next) {
    var db = req.app.get('db');
    var user = req.body;
    console.log('node\\createUser', user);

    db.insert_user([user.firstname, user.lastname, user.email], function(err, user) {
      if(err) {
        console.log('createUser', user, err);
      }
      res.send(user);
    })
  },
  updateUser: function (req, res, next) {
    var db = req.app.get('db');
    var users = req.body;
    db.update_user([user.firstname, user.lastname, user.email, user.id], function (err, response) {
      if(err) {
        console.log('createUser', response, err);
      }
      res.send(response);
    })
  },
  removeVehicle: function (req, res, next) {
    var db = req.app.get('db');
    //userId,vehicleId
    var userId = req.params.userId;
    var vehicleId = req.params.vehicleId;
    console.log('removeVehicle', userId, vehicleId);
    db.remove_owner([vehicleId, userId], function (err, response) {
      if(err) {
        console.log('createUser', response, err);
      }
      res.send({isSuccessful:true});
    })
  }
}
