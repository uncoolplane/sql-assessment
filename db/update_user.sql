UPDATE users
SET users.firstname=$1,
    users.lastname=$2,
    users.email=$3
WHERE users.id=$4
