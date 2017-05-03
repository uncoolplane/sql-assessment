UPDATE vehicles
SET vehicles.make=$1,
  vehicles.model=$2,
  vehicles.year=$3,
  vehicles.ownerid=$4
WHERE vehicles.id=$5
