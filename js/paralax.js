"use strict"

window.onload = function () {

	const parallax = document.querySelector('.mainscreen__img');

	if (parallax) {
		const waves = document.querySelector('.img-waves');

		//Коэффициенты движения

		const forWaves = -10;

		//Скорость анимации

		const speed = 0.05;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			//Передаем стили

			waves.style.cssText = `transform: translate(${positionX / forWaves}%,${positionY / forWaves}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			//Получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			//Центральный ноль

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;

		});

	}
}