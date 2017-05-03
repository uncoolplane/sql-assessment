SELECT vehicles.* FROM vehicles
  INNER JOIN users on vehicles.ownerid = users.id
WHERE users.email = $1
