
DROP DATABASE IF EXISTS codegig;

CREATE DATABASE codegig;
USE codegig;

CREATE TABLE `Gigs` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `title` VARCHAR( 200) NOT NULL,
  `technologies` VARCHAR( 200 ) NOT NULL,
  `budget` DATETIME NOT NULL,
  `description` text NOT NULL,
  `contact_email` VARCHAR (200) NOT NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME

  PRIMARY KEY ( `id` ) 
);