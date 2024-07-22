-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2024 a las 17:40:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `bio` varchar(300) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `username`, `name`, `bio`, `phone`, `email`, `pass`) VALUES
(1, NULL, NULL, NULL, NULL, 'juan@mail', '$2b$10$23vcyYD7kWhWhPL74.SvMuXQshVAtGFZUQ65uvlPInPycWHd0nPmS'),
(2, NULL, NULL, NULL, NULL, 'juanchoo@mail', '$2b$10$t0t/1AAfIc/30ySCWZV5AOIFS48PQhmCM2ui8uJ1qJJ9g9v3hiQSO'),
(3, NULL, NULL, NULL, NULL, 'prueba@mail', '$2b$10$/jl.Q4tBym7sNxirSCFS.uKYhOKHzy8QpEXYMwElVlruJpgktxRDy'),
(4, NULL, NULL, NULL, NULL, 'probar@mail', '$2b$10$w9ex7X84b6SlVNjoCiJDUOLu2.4EIyI552bBY8.Og4M2iv4D5W6/u'),
(5, NULL, NULL, NULL, NULL, 'testeo@mail', '$2b$10$pixeVuHiCb0yRecAaBX8a.LyCoSOSzqWS/WCFj8M2pi7.LiEiWTeS'),
(6, NULL, NULL, NULL, NULL, 't@mail', '$2b$10$WSJPaJaSTfOLNqQ8tNBqUOaItHkE14i3gh.sJ.x2QfD4Xmio06bLe');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
