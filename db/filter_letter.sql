SELECT * from vehicles
  INNER JOIN users on users.id = vehicles.ownerid
WHERE users.firstname like $1
