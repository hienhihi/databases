DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11),
  message_text MEDIUMTEXT,
  room_name VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(50),
  message_id int,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (message_id) REFERENCES messages (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE friends (
  /* Describe your table here.*/
  user_id int(11) NOT NULL,
  friend_id int(11) NOT NULL
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

