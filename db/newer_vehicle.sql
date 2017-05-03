SELECT *, users.firstname, users.lastname FROM vehicles
  INNER JOIN users on users.id = vehicles.ownerid
WHERE vehicles.year > 2000
ORDER BY year DESC
