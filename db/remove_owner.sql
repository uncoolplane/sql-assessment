UPDATE vehicles
SET ownerid=null
WHERE id=$1 AND ownerid=$2
