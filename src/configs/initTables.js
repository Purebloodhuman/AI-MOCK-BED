// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require("../services/db");

// ##############################################################
// DEFINE SQL STATEMENTS
// ##############################################################
const SQLSTATEMENT = `
DROP TABLE IF EXISTS Owner;
DROP TABLE IF EXISTS Car;

CREATE TABLE Owner (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Car (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model TEXT NOT NULL,
    year INT NOT NULL,
    mileage INT NOT NULL,
    last_serviced TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES owner(id) ON DELETE CASCADE
);

INSERT INTO owner (name) VALUES 
('Alice'), 
('Bob'), 
('Charlie');


INSERT INTO car (model, year, mileage, owner_id) VALUES 
('Ford Mustang', 2018, 45000, 1),
('Tesla Model 3', 2022, 12000, 1),
('BMW 3 Series', 2019, 30000, 2),
('Audi A4', 2020, 25000, 2),
('Honda Jazz', 2015, 80000, 3);

`;

// ##############################################################
// RUN SQL STATEMENTS
// ##############################################################
pool.query(SQLSTATEMENT, (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully");
  }
  process.exit();
});
