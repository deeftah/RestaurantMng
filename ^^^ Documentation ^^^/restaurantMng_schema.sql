create database restaurantMng;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

use restaurantMng;

CREATE TABLE restaurant (
	restaurant_id INT UNSIGNED,
	restaurant_name VARCHAR (25),
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (restaurant_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE restaurant_user (
	username VARCHAR(50),
	user_password VARCHAR(50),
	fname VARCHAR(25),
	lname VARCHAR(25),
	address VARCHAR(35),
	city VARCHAR(25),
	state CHAR(2),
	zipcode INT UNSIGNED COMMENT 'Up to 9 digit ZIP code',
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (username)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE customer (
	username VARCHAR(50),
	PRIMARY KEY (username),
	FOREIGN KEY (username) REFERENCES restaurant_user(username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE employee (
	username VARCHAR(50),
	PRIMARY KEY (username),
	FOREIGN KEY (username) REFERENCES restaurant_user (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE restaurant_employee (
	restaurant_id INT UNSIGNED,
	username VARCHAR(50),
	restaurant_owner BIT(1) COMMENT 'Is this employee an owner of this restaurant? 0 for false, 1 for true',
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (restaurant_id, username),
	FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id),
	FOREIGN KEY (username) REFERENCES restaurant_user (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE privilege (
	privilege_id INT UNSIGNED,
	privilege_name VARCHAR(50),
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (privilege_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE emp_privilege (
	restaurant_id INT UNSIGNED,
	username VARCHAR(50),
	privilege_id INT UNSIGNED,
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (restaurant_id, username, privilege_id),
	FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id),
	FOREIGN KEY (username) REFERENCES employee(username),
	FOREIGN KEY (privilege_id) REFERENCES privilege(privilege_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE payment_method (
	payment_id INT UNSIGNED AUTO_INCREMENT,
  username VARCHAR(50),
  pay_method VARCHAR(25) NOT NULL COMMENT 'Payment Method: cash, credit card, etc',
  card_ownerName VARCHAR(50),
  card_number BIGINT UNSIGNED COMMENT 'Up to 19 digit payment card number',
  card_securityCode SMALLINT UNSIGNED COMMENT '3 or 4 digit security code on payment card',
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date ; default = 0',
	PRIMARY KEY (payment_id),
	FOREIGN KEY (username) REFERENCES customer (username),
  KEY(username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE party (
	party_id INT UNSIGNED AUTO_INCREMENT,
	restaurant_id INT UNSIGNED,
	party_name VARCHAR(25),
	party_size TINYINT NOT NULL,
	party_contact_num VARCHAR (15),
	inDateTime DateTime DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
  outDateTime DATETIME DEFAULT 0 COMMENT 'When the party leaves needs to be UPDATED',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (party_id, restaurant_id),
	FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE cust_order (
	order_id INT UNSIGNED AUTO_INCREMENT,
  payment_id INT UNSIGNED NOT NULL,
  username VARCHAR(50),
  total_cost DECIMAL(9, 2) NOT NULL,
	total_paid DECIMAL(9, 2),
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date ; default = 0',
	PRIMARY KEY (order_id),
	FOREIGN KEY (username) REFERENCES customer(username),
	FOREIGN KEY (payment_id) REFERENCES payment_method(payment_id),
  KEY(username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE customer_resv (
	party_id INT UNSIGNED,
	order_id INT UNSIGNED,
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
  PRIMARY KEY (order_id, party_id),
  FOREIGN KEY (party_id) REFERENCES party (party_id),
  FOREIGN KEY (order_id) REFERENCES cust_order (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE food (
  food_id INT UNSIGNED AUTO_INCREMENT,
  food_name VARCHAR(25),
  food_type VARCHAR(25) COMMENT 'Appetizer, Side Dish, Entree, Dessert, Beverage',
  food_cost DECIMAL (5,2),
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (food_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE order_food (
	order_id INT UNSIGNED,
  food_id INT UNSIGNED,
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
  PRIMARY KEY (order_id, food_id),
	FOREIGN KEY (order_id) REFERENCES cust_order(order_id),
	FOREIGN KEY (food_id) REFERENCES food(food_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE restaurant_food (
	restaurant_id INT UNSIGNED,
	food_id INT UNSIGNED,
	creationDateTime DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'When tuple is created.',
	mod_time TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last modification date; default = 0',
	PRIMARY KEY (restaurant_id, food_id),
	FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id),
	FOREIGN KEY (food_id) REFERENCES food(food_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
