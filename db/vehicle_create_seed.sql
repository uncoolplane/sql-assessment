-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
-- DROP TABLE IF EXISTS vehicles;

-- CREATE TABLE vehicles
-- (
--     id integer NOT NULL DEFAULT nextval('vehicle_id_seq'::regclass),
--     make text,
--     model text,
--     year text,
--     ownerid integer,
--     CONSTRAINT vehicle_pkey PRIMARY KEY (id),
--     CONSTRAINT owner_fk FOREIGN KEY (id)
--         REFERENCES users (id) MATCH SIMPLE
--         ON UPDATE NO ACTION
--         ON DELETE NO ACTION
-- );

INSERT INTO vehicles (make, model, year, ownerid)
VALUES ('Toyota', 'Camry', 1991, 1);

INSERT INTO vehicles(make, model, year, ownerid)
	VALUES ('Honda', 'Civic', 1995, 1);

INSERT INTO vehicles (make, model, year, ownerid)
VALUES ('Ford', 'Focus', 2005, 1);

INSERT INTO vehicles (make, model, year, ownerid)
VALUES ('Ford', 'Taurus', 2003, 2);

INSERT INTO vehicles (make, model, year, ownerid)
VALUES ('VW', 'Bug', 2010, 2);

INSERT INTO vehicles (make, model, year, ownerid)
VALUES ('Mini', 'Coup', 2013, 3);
