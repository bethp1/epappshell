-- MySQL dump 10.16  Distrib 10.1.30-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: appshell
-- ------------------------------------------------------
-- Server version	10.1.30-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `raw_password` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'beth','bethp1','bethp1@rcn.com','beth1995','0abe976a0c7b8862a666b489fa5ff778',NULL,NULL,NULL),(2,'larry','larryp1','larryp1@rcn.com','ace','360e2ece07507675dced80ba867d6dcd',NULL,NULL,NULL),(3,'larry','larryp','larry1@rcn.com','ace123','aa5be6789de6fd2c9d7f53f79415e693',NULL,NULL,NULL),(4,'Kathy','kathy123','kathyp1@rcn.com','mom','bd1d7b0809e4b4ee9ca307aa5308ea6f',NULL,NULL,NULL),(5,'Cathy','kathy12234','Cathyp1@rcn.com','mom123','fbb5b58a59e478be1a801551f34bfca1',NULL,NULL,NULL),(6,'greg','greg123','greg@hotmail.com','123','202cb962ac59075b964b07152d234b70',NULL,NULL,NULL),(7,'beth Price','beth price','beth@ hotmail.com','jonas','9c5ddd54107734f7d18335a5245c286b',NULL,NULL,NULL),(12,'bethp1','beth','bethK1@rcn.com','beth1995','0abe976a0c7b8862a666b489fa5ff778',NULL,NULL,NULL),(14,'beth','beth0','bethu1@rcn.com','beth1995','0abe976a0c7b8862a666b489fa5ff778',NULL,NULL,NULL),(15,'dgfgf','bethhjhhf','gfdgf@refe.com','dfdf','b52c96bea30646abf8170f333bbd42b9',NULL,NULL,NULL),(16,'gfgfgfgf','fgfgfgf','fgfgf@dgfg.com','dfdf','b52c96bea30646abf8170f333bbd42b9',NULL,NULL,NULL),(17,'gfdgfgdg','gffgfdg','fgdgf@dd.com','3434','14c879f3f5d8ed93a09f6090d77c2cc3',NULL,NULL,NULL),(18,'dsfdfdsf','defdfsfsfd','fdsff@fddfh.com','123','202cb962ac59075b964b07152d234b70',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `raw_password` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'beth Price','bet','bethp1@rcn.om','jonas1993','22dcaae898e6c85c6becb0834b347828','1521491029467C',NULL,NULL),(2,'Larry','larryp1','ace@rcn.com','ace','360e2ece07507675dced80ba867d6dcd',NULL,NULL,NULL),(3,'kathy','kathyp1','kathy@rcn.com','mom','bd1d7b0809e4b4ee9ca307aa5308ea6f',NULL,NULL,NULL),(4,'help','help','help@rcn,com','help123','b37bf08f6406331250efc380acf3996d',NULL,NULL,NULL),(5,'ace','larry','ace@rcn.om','ace123','aa5be6789de6fd2c9d7f53f79415e693',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-19 17:56:23
