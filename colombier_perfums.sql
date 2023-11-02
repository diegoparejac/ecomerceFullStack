-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2023 a las 00:16:37
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colombier_perfums`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` tinyint(10) NOT NULL,
  `cat_perfume` varchar(50) NOT NULL,
  `icono` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `cat_perfume`, `icono`) VALUES
(1, 'hombre', 'fa-mars'),
(2, 'mujer', 'fa-venus'),
(3, 'unisex', 'fa-venus-mars');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `marca_id` tinyint(20) NOT NULL,
  `marca_perfume` varchar(60) NOT NULL,
  `nombre_perfume` varchar(60) NOT NULL,
  `tamaño` varchar(25) NOT NULL,
  `cant_vendida` int(5) NOT NULL,
  `imagen_banner` varchar(25) NOT NULL,
  `concentracion` varchar(25) NOT NULL,
  `familia_perfume` varchar(30) NOT NULL,
  `id_categoria_perfume` tinyint(10) UNSIGNED NOT NULL,
  `precio` int(10) NOT NULL,
  `stock` int(6) NOT NULL,
  `oferta` varchar(10) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `id_user` tinyint(4) NOT NULL,
  `clave` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`marca_id`, `marca_perfume`, `nombre_perfume`, `tamaño`, `cant_vendida`, `imagen_banner`, `concentracion`, `familia_perfume`, `id_categoria_perfume`, `precio`, `stock`, `oferta`, `imagen`, `id_user`, `clave`) VALUES
(1, 'Bvlgari', 'Aqua Marine', '100 ml', 100, 'aquamarine.jpg', 'Eau de Toilette', 'Acuatica', 2, 350000, 36, 'si', 'aquamarine.jpg', 6, 'hombre_01'),
(2, 'Bentley', 'Intense', '100 ml', 98, 'bentleyintense.jpg', 'Eau de Toilette', 'Amaderada', 1, 330000, 68, 'si', 'bentleyintense.jpg', 1, 'hombre_02'),
(3, 'Hugo Boss', 'Bottled', '100 ml', 32, 'bossbottled.jpg', 'Eau de perfum', 'Fresca', 2, 340000, 28, 'no', 'bossbottled.jpg', 3, 'mujer_01'),
(4, 'Hugo Boss', 'Bottled Unlimited', '200 ml', 31, 'bottledunlimited.jpg', 'Eau de Toilette', 'fresca frutal', 1, 480000, 25, 'si', 'bottledunlimited.jpg', 4, 'hombre_03'),
(5, 'Carolina Herrera', 'CH', '200 ml', 72, 'ch.jpg', 'Eau de Toilette', 'fresca frutal', 3, 520000, 15, 'no', 'ch.jpg', 2, 'unisex_01'),
(26, 'Lacoste', 'Blanc', '100 ml', 3, 'lacosteblanc.jpg', 'eau de toilete', 'Fresca', 1, 350000, 100, 'No', 'lacosteblanc.jpg', 0, ''),
(27, 'Dolce', 'Light Blue', '100 ml', 65, 'logo.png', 'eau de toilete', 'Fresca', 2, 230000, 25, 'No', 'logo.png', 0, ''),
(29, 'Lacoste', 'Light Blue', '100 ml', 5, 'logo2.png', 'eau de PERFUM', 'Fresca', 2, 230000, 25, 'No', 'logo2.png', 0, ''),
(30, 'paco Rabbane', 'Phantom', '100', 4, 'logo4.png', 'eau de PERFUM', 'frutal', 2, 9, 26, 'No', 'logo4.png', 0, ''),
(31, 'dior', 'Homme', '100 ml', 10, 'logocarolinaherrrera.png', 'eau de toilete', 'Fresca', 1, 8, 12, 'No', 'logocarolinaherrrera.png', 0, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` tinyint(4) NOT NULL,
  `nombre_usuario` varchar(30) NOT NULL,
  `apellido_usuario` varchar(30) NOT NULL,
  `email_usuario` varchar(30) NOT NULL,
  `password` varchar(25) NOT NULL,
  `telefono` int(10) NOT NULL,
  `pais` varchar(25) NOT NULL,
  `categoria` varchar(25) NOT NULL,
  `url_imagen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `nombre_usuario`, `apellido_usuario`, `email_usuario`, `password`, `telefono`, `pais`, `categoria`, `url_imagen`) VALUES
(1, 'Carlos', 'Barrera', 'carlos.barrera@edu.com', 'carlos123', 97465832, 'colombia', 'administrador', '1695194070527.jpg'),
(2, 'Thomasa', 'Anderson', 'tomasa@anderson.com', 'tomasa123', 65874321, 'mexico', 'administrador', '1695680217907.jpg'),
(3, 'Carla', 'Marquez', 'carla.mar@gmail.com', 'carla123', 65479652, 'venezuela', 'usuario', '1695231288938.jpg'),
(4, 'Sebastian', 'Pizarro', 'ej@ej.com', 'ej123', 745326547, 'colombia', 'usuario', '1657395831244.jpeg'),
(5, 'Lucas', 'Montoby', 'lucas@dh.com', 'lucas123', 36257518, 'brasil', 'administrador', '1657406279748.jpeg'),
(6, 'diego', 'pareja', 'diego.pareja@gmail.com', 'diego123', 36382148, 'argentina', 'administrador', '1695173708031.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`marca_id`),
  ADD KEY `id_categoria_perfume` (`id_categoria_perfume`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` tinyint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `marca_id` tinyint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
