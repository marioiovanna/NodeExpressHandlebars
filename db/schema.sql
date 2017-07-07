

CREATE SCHEMA games;

USE games;

CREATE TABLE `games`.`games_data` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45),
  `Platform` VARCHAR(45),
  `Year_of_Release` INT,
  `Genre` VARCHAR(45),
  `Publisher` VARCHAR(45),
  `NA_Sales` INT,
  `EU_Sales` INT,
  `JP_Sales` INT,
  `Other_Sales` INT,
  `Global_Sales` INT,
  `Critic_Score` INT,
  `Critic_Count` INT,
  `User_Score` INT,
  `User_Count` INT,
  `Developer` VARCHAR(45),
  `Rating` INT,
  PRIMARY KEY (`id`));
